<?php

namespace App\Controller\Component;

use Cake\Controller\Component;
use Cake\View\View;
use Cake\Core\Configure;

class ToolboxComponent extends Component
{
    /**
     * @param $to
     * @param $from
     * @param string $from_name
     * @param $subject
     * @param string $message
     * @param string $attachment
     * @return mixed
     */
    public function sendGenericEmailMailGun(
        $to,
        $from,
        $from_name = '',
        $subject,
        $message = '',
        $attachment = ''
    ) {

        //Maingun endpoint
        $mailgun_endpoint = Configure::read('MAILGUN_ENDOINT');

        //check if the $to variable is basically an array
        //containing multiple email addresses, if so form
        //a string separated by comma and set it to mailgun
        if(is_array($to)) {
            $to = implode(',', $to);
        }

        //Deal with the attachment, we are expecting an array like
        if(is_array($attachment) && !is_null($attachment['filename']) && trim($attachment['filename']) !== '') {
            //File present
            $theAttachment = $attachment['path'] . $attachment['filename'];
            //Array of data
            $mailgun_data = array(
                'from' 			=> $from_name . ' <' . $from . '>',
                'subject'		=> $subject,
                'to'			=> $to,
                'text'			=> '',
                'html'			=> $message,
                'attachment[0]' => curl_file_create($theAttachment)
            );
        } else {
            //No attachment
            //Array of data
            $mailgun_data = array(
                'from' 			=> $from_name . ' <' . $from . '>',
                'subject'		=> $subject,
                'to'				=> $to,
                'text'			=> '',
                'html'			=> $message
            );
        }

        //Mailgun username
        $mg_uname = 'api';

        //Initiate cURL call
        $ch = curl_init($mailgun_endpoint);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: multipart/form-data'));
        curl_setopt($ch, CURLOPT_USERPWD, $mg_uname . ":" . Configure::read('MAILGUN_API'));
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, count($mailgun_data));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $mailgun_data);
        //execute post
        $result = curl_exec($ch);

        $result_arr = json_decode($result, true);

        return $result_arr;
    }

    /**
     * @param $layout_ctp_full_path
     * @param $view_path
     * @param $view_ctp
     * @param array $view_variables
     * @return string
     */
    public function getViewWithData(
        $layout_ctp_full_path,
        $view_path,
        $view_ctp,
        $view_variables = array()
    ) {
        //Cake 3.8 compliant code
        $view = new View($this->request, $this->response, null);
        $view->setTemplatePath($view_path);  // Directory inside view directory to search for .ctp files
        $view->setLayout($layout_ctp_full_path); // layout to use or false to disable

        //Set passed view variables for it
        foreach ($view_variables as $key => $value) {
            $view->set($key, $value);
        }

        //Grab output into variable without the view actually outputting!
        $view_output = $view->render($view_ctp);

        //and we are done
        return $view_output;
    }

    /**
     * @param $url
     * @param string $params
     * @param array $extraHeaders
     * @return mixed
     *
     * Makes a simple cURL get call to the passed URL
     */
    function makecURLCall($url, $params = '', $extraHeaders = array()){

        //Check if $param is indeed an array
        if(is_array($params) && !empty($params)) {
            //Then build query
            $url .= '?' . http_build_query($params);
        }

        //Init curl
        $ch = curl_init();
        //Set options
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, false);

        //Set custom headers if header array not empty
        if(is_array($extraHeaders) && !empty($extraHeaders)){
            curl_setopt($ch, CURLOPT_HTTPHEADER, $extraHeaders);
        }
        
        //Execute and return
        $data = curl_exec($ch);
        return $data;
    }

    /**
     * @param $rawData
     * @return array
     *
     * Formats the raw data received from Vimeo and
     * returns it to us in a desired format
     */
    function formatTrainingVideoData($rawData)
    {
        //Convert the passed JSON data to array
        $vidArr = json_decode($rawData, true);

        //The final array where everything would be stuffed
        $custVidArray = array();
        //pr(json_decode($rawData)); die;

        //Start looping
        foreach($vidArr['data'] as $theVid) {
            $thisVidData = array(
                'id'        => $this->extractVidId($theVid['uri']),
                'title'     => $theVid['name'],
                'thumbnail' => $theVid['pictures']['sizes'][3]['link_with_play_button'],
                'width'     => $theVid['width'],
                'height'    => $theVid['height']
            );
            //Stuff to main array
            array_push($custVidArray, $thisVidData);
        }

        return $custVidArray;
    }

    /**
     * @param $rawData
     * @return array
     * 
     * Formats the raw data for video testimonial 
     * format
     */
    function formatVideoTestimonialData($rawData)
    {
        //Convert the passed JSON data to array
        $vidArr = json_decode($rawData, true);

        //The final array where everything would be stuffed
        $testimonialVidArray = array();

        //Start looping
        foreach($vidArr['data'] as $key => $theVid) {
            $thisVidData = array(
                'serial'        => strlen($key) < 2 ? '0' . ($key + 1) : $key + 1,
                'videoid'       => $this->extractVidId($theVid['uri'], true),
                'headline'      => $theVid['name'],
                'image'         => $theVid['pictures']['sizes'][3]['link'],
                'description'   => is_null($theVid['description']) || empty($theVid['description']) ? '' : $this->detectUrlAndWrapInLink(trim($theVid['description'])),
                'width'     => $theVid['width'],
                'height'    => $theVid['height']
            );
            //Stuff to main array
            array_push($testimonialVidArray, $thisVidData);
        }

        return $testimonialVidArray;
    }

    /**
     * @param $rawData
     * @return array
     * 
     * Formats the raw data for BATS slider videos
     * format
     */
    function formatBatsSliderData($rawData)
    {
        //Convert the passed JSON data to array
        $vidArr = json_decode($rawData, true);

        //The final array where everything would be stuffed
        $batsSliderVidArray = array();

        //Start looping
        foreach($vidArr['data'] as $key => $theVid) {
            $thisVidData = array(
                'serial'        => strlen($key) < 2 ? '0' . ($key + 1) : $key + 1,
                'videoid'       => $this->extractVidId($theVid['uri'], true),
                'headline'      => $theVid['name'],
                'description'   => is_null($theVid['description']) || empty($theVid['description']) ? '' : trim($theVid['description']),
                'image'         => $theVid['pictures']['sizes'][6]['link']
            );
            //Stuff to main array
            array_push($batsSliderVidArray, $thisVidData);
        }

        return $batsSliderVidArray;
    }

    /**
     * @param $vidUri
     * @param bool $splitOnColon
     * @return mixed
     * Expected format(s):
     * -- /videos/497261433
     * -- /videos/497261433:c9d807c594 (in case of private videos)
     * Expected output
     * -- 497261433
     */
    private function extractVidId($vidUri, $splitOnColon = false) {
        $uriParts = explode("/", $vidUri);
        //Occasionally some videos are made private and they
        //have another string part separated by colon in the id
        //Check if we need to discard that
        if($splitOnColon == true) {
            $idSplitOnColon = explode(':', $uriParts[2]);
            return $idSplitOnColon[0];
        } else {
            return $uriParts[2];
        }
    }

    /**
     * @param $theString
     * @return mixed
     * 
     * Tries to detect if a string contains an URL
     * if it finds one, wraps it in hyperlink and
     * returns it to the caller 
     */
    function detectUrlAndWrapInLink($theString)
    {
        // The Regular Expression which would detect the link
        $reg_exUrl = "/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/";

        // Check if there is a url in the text
        if(preg_match($reg_exUrl, $theString, $url)) {
            // make the urls hyper links
            $theString = preg_replace($reg_exUrl, "<a href='" . $url[0] . "' target='_blank'>" . $url[0] . "</a> ", $theString);

        }
        
        return $theString;
    }
}