const apiBase = __DEV__ ? 'http://batrocks.local/' : '/'

//Contact us endpoint
export const CONTACT_US_EP = `${apiBase}contactus`
//Resource VIDEO api endpoint
export const VIDEO_RESOURCES_API = `${apiBase}api/getVideoResources`
//Video testimonial api endpoint
export const VIDEO_TESTIMONIAL_API = `${apiBase}api/getVideoTestimonials`
//BATS= Videos api endpoint
export const BATS_SLIDER_VIDEOS_API = `${apiBase}api/getBatsSliderVideos`

export const NAV_CLASS_FOR_CONTAINER = {
  //Home and common
  'hm-container-bg': 'light',
  'hm-slider-1': 'dark',
  'all-in-one': 'light',
  'stats': 'dark',
  //'testimonial-container-bg': 'light',
  'video-testimonial': 'light',
  'offerings-container-bg': 'light',
  'crmup-container-bg': 'dark',
  'contact-us': 'light',
  'footer-container-bg': 'dark',
  //About
  'abouthero-container': 'light',
  'mission-container-bg': 'dark',
  'about-testimonial-bg': 'dark',
  //Contact
  'contacthero-container-bg': 'dark',
  'maponly-container-bg': 'light'
}


