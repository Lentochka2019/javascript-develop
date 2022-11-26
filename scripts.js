// elementor hook, find tag <a> and replase <span> For seo, widget toogle*/
function toggle_widget_content( $widget_content, $widget ) {
	
	if($widget->get_name()=='toggle')
	{
 $search  = [ '<a ', '</a>' ];
    $replace = [ '<span ', '</span>' ];
return str_replace( $search, $replace, $widget_content );
	}
	else
    return $widget_content;

}
add_filter( 'elementor/widget/render_content', 'toggle_widget_content', 10, 2 );

// for archives 
 (document.querySelectorAll('.button') || []).forEach(function(b) {
          b.addEventListener('click', function() {
              var d = this.dataset, f;
              if(d && d.name && d.link)  {
                  f = document.querySelector('.wpcf7-form');
                  if(f) {
                      f.querySelector('[name="title-post"]').value = d.name;
                      f.querySelector('[name="link-post"]').value = d.link;
                  }
              }
          });
      });
