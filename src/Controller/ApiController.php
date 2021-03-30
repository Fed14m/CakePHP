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

/**
 * Static content controller
 *
 * This controller will render views from Template/Pages/
 *
 * @link https://book.cakephp.org/3/en/controllers/pages-controller.html
 */
class ApiController extends AppController
{
    /**
     * The initialize method
     */
    public function initialize()
    {
        $this->loadComponent('Toolbox');
    }

    /**
     * @return mixed
     * Gets the Video data from Vimeo and response
     * back to frontend as JSON
     */
    public function getVideoResources()
    {
        $this->autoRender = false;

        //Vimeo endpoint
        $folderApiPath = Configure::read('VIMEO_API_BASEURL') . 'users/'
                . Configure::read('VIMEO_USER_ID') . '/projects/'
                . Configure::read('VIMEO_FOLDER_ID') . '/videos'; 
        
        //Extra params to modify request  
        $extraParams = array(
            'per_page'  => 100,
            'sort'      => 'date',
            'direction' => 'desc'
        );

        //Set Authorization header
        $custHeaders = array(
            'Authorization: bearer ' . Configure::read('VIMEO_ACCESS_TOKEN')
        );

        //Let's call the API with the above configuration
        $vidsInFolder = $this->Toolbox->makecURLCall($folderApiPath, $extraParams, $custHeaders);
        
        //Get it formatted
        $videoDataFormatted = $this->Toolbox->formatTrainingVideoData($vidsInFolder);

        //Return the response to the frontend caller
        $response = $this->allowCORs();
        $response = $response->withType('application/json')
            ->withStringBody(json_encode($videoDataFormatted));
        return $response;
    }

    /**
     * @return mixed
     *
     * The API endpoint to get the video testimonials
     * From the Vimeo
     */
    public function getVideoTestimonials()
    {
        $this->autoRender = false;

        //Vimeo api endpoint
        $folderApiPath = Configure::read('VIMEO_API_BASEURL') . 'users/'
            . Configure::read('VIMEO_USER_ID') . '/projects/'
            . Configure::read('VID_TESTIMONIAL_FOLDER') . '/videos';

        //Extra params to modify request
        $extraParams = array(
            'per_page'  => 100,
            'sort'      => 'date',
            'direction' => 'desc'
        );

        //Set Authorization header
        $custHeaders = array(
            'Authorization: bearer ' . Configure::read('VIMEO_ACCESS_TOKEN')
        );

        //Let's call the API with the above configuration
        $vidsInFolder = $this->Toolbox->makecURLCall($folderApiPath, $extraParams, $custHeaders);

        //Get it formatted
        $videoDataFormatted = $this->Toolbox->formatVideoTestimonialData($vidsInFolder);

        //Return the response to the frontend caller
        $response = $this->allowCORs();
        $response = $response->withType('application/json')
            ->withStringBody(json_encode($videoDataFormatted));
            //->withStringBody($vidsInFolder);
        return $response;
    }

    /**
     * @return mixed
     * 
     * The API endpoint to get bats slider videos
     * from Vimeo
     */
    public function getBatsSliderVideos()
    {
        $this->autoRender = false;

        //Vimeo api endpoint
        $folderApiPath = Configure::read('VIMEO_API_BASEURL') . 'users/'
            . Configure::read('VIMEO_USER_ID') . '/projects/'
            . Configure::read('BATS_SLIDER_FOLDER') . '/videos';

        //Extra params to modify request
        $extraParams = array(
            'per_page'  => 100,
            'sort'      => 'date',
            'direction' => 'desc'
        );

        //Set Authorization header
        $custHeaders = array(
            'Authorization: bearer ' . Configure::read('VIMEO_ACCESS_TOKEN')
        );

        //Let's call the API with the above configuration
        $vidsInFolder = $this->Toolbox->makecURLCall($folderApiPath, $extraParams, $custHeaders);

        //Get it formatted
        $videoDataFormatted = $this->Toolbox->formatBatsSliderData($vidsInFolder);

        //Return the response to the frontend caller
        $response = $this->allowCORs();
        $response = $response->withType('application/json')
            ->withStringBody(json_encode($videoDataFormatted));
            //->withStringBody($vidsInFolder);
        return $response;
    }

}