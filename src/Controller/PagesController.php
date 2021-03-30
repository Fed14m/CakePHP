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

use Cake\Core\Configure;
use Cake\Http\Exception\ForbiddenException;
use Cake\Http\Exception\NotFoundException;
use Cake\View\Exception\MissingTemplateException;

/**
 * Static content controller
 *
 * This controller will render views from Template/Pages/
 *
 * @link https://book.cakephp.org/3/en/controllers/pages-controller.html
 */
class PagesController extends AppController
{

    /**
     * The initialize method
     */
    public function initialize()
    {
        $this->loadComponent('Toolbox');
    }

    /**
     * Displays a view
     *
     * @param array ...$path Path segments.
     * @return \Cake\Http\Response|null
     * @throws \Cake\Http\Exception\ForbiddenException When a directory traversal attempt.
     * @throws \Cake\Http\Exception\NotFoundException When the view file could not
     *   be found
     * @throws \Cake\View\Exception\MissingTemplateException In debug mode.
     */
    public function display(...$path)
    {
        if (!$path) {
            return $this->redirect('/');
        }
        if (in_array('..', $path, true) || in_array('.', $path, true)) {
            throw new ForbiddenException();
        }
        $page = $subpage = null;

        if (!empty($path[0])) {
            $page = $path[0];
        }
        if (!empty($path[1])) {
            $subpage = $path[1];
        }
        $this->set(compact('page', 'subpage'));

        try {
            $this->render(implode('/', $path));
        } catch (MissingTemplateException $exception) {
            if (Configure::read('debug')) {
                throw $exception;
            }
            throw new NotFoundException();
        }
    }

    /**
     * The main react app for bats.rocks
     */
    public function reactapp()
    {
        //Choose layout
        $this->viewBuilder()->setLayout('reactapp');

        //Set title for this page
        $this->set('title_for_layout', 'BATS.rocks');
    }

    /**
     * The contact us endpoint
     */
    public function contactus()
    {
        $this->autoRender = false;
        
        if ( $this->request->is( 'post' ) ) {
            $postData = $this->request->getData();

            //Send email to admin
            $this->sendEmailToAdmin($postData);
            $retVal = array(
                "success" => 1
            );
        } else {
            $retVal = array(
                "success" => 0
            );
        }

        return $this->returnAsJsonResponse($retVal);
    }

    /**
     * Sends mails to admin to notify that the
     * order API has failed
     * @param $orderId
     */
    private function sendEmailToAdmin($postData) {
        //Fetch template
        $html_message = $this->Toolbox->getViewWithData(
            'Email/html/simple_mail',
            'Email/html',
            'contact_us',
            array('title' => 'User Contacted Us', 'data' => $postData)
        );

        //successfully sends Mailgun mails
        $this->Toolbox->sendGenericEmailMailGun(
            Configure::read('ADMIN_EMAIL'),
            Configure::read('SITE_BOT_EMAIL'),
            'Bats.Rocks',
            'BATS - New User lead',
            $html_message
        );
    }
}
