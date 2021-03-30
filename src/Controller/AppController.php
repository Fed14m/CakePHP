<?php
/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link      https://cakephp.org CakePHP(tm) Project
 * @since     0.2.9
 * @license   https://opensource.org/licenses/mit-license.php MIT License
 */
namespace App\Controller;

use Cake\Controller\Controller;
use Cake\Event\Event;
use Cake\Core\Configure;

/**
 * Application Controller
 *
 * Add your application-wide methods in the class below, your controllers
 * will inherit them.
 *
 * @link https://book.cakephp.org/3/en/controllers.html#the-app-controller
 */
class AppController extends Controller
{

    /**
     * Initialization hook method.
     *
     * Use this method to add common initialization code like loading components.
     *
     * e.g. `$this->loadComponent('Security');`
     *
     * @return void
     */
    public function initialize()
    {
        parent::initialize();

        $this->loadComponent('RequestHandler', [
            'enableBeforeRedirect' => false,
        ]);
        $this->loadComponent('Flash');

        /*
         * Enable the following component for recommended CakePHP security settings.
         * see https://book.cakephp.org/3/en/controllers/components/security.html
         */
        //$this->loadComponent('Security');
    }

    /**
     * This function is only needed for Webpack dev server testing env
     * Checks if we are on localhost dev env, returns allow all header
     * to bypass CORs
     */
    function allowCORs()
    {
        $domain_name = Configure::read('SITE_DOMAIN');
        $protocol = Configure::read('OVER_PROTOCOL');

        //----Get who's calling this page
        if(isset($_SERVER['HTTP_REFERER'])) {
            $caller = trim($_SERVER['HTTP_REFERER']);
        } else {
            $caller = "$protocol://$domain_name";
        }

        $caller_parsed = parse_url($caller);
        $caller_domain = $caller_parsed['scheme'] . "://" . $caller_parsed['host'];
        //Account for port
        if(isset($caller_parsed['port']) && trim($caller_parsed['port']) != '') {
            $caller_domain = $caller_domain . ':' . $caller_parsed['port'];
        }
        //-------

        //Custom response object with added headers
        // X-Frame-Options is not supported by Chrome, better hold it off
        //$response = $this->response->withHeader('X-Frame-Options', 'ALLOW-FROM ' . $caller_domain)
        $response = $this->response
            ->withHeader('Access-Control-Allow-Origin', $caller_domain)
            ->withHeader('Access-Control-Allow-Credentials', 'true')
            ->withHeader('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token, X-cust-tok')
            ->withHeader('P3P', '"We do not have a P3P policy"')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');

        //Return this custom response to caller
        return $response;
    }

    /**
     * @param $array
     * @param bool $jsonEncode
     * @return \Cake\Http\Response|static
     */
    function returnAsJsonResponse($array, $jsonEncode = true)
    {
        //Decide if we need to Encode
        $payload = ($jsonEncode) ? json_encode($array) : $array;

        //Set CORs related headers
        $response = $this->allowCORs();
        $response = $response->withType('application/json')
            ->withStringBody($payload);

        return $response;
    }
}
