/*global l32n:true*/
jQuery(document).ready(function($) {

	jQuery('.is--soundcloud').each(function(){

		var $this = jQuery(this);
	    var iframe = document.createElement('iframe');
	    var embed = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/ID';
	    embed += '&amp;auto_play=false';
	    embed += '&amp;color=#ff7700';
	    embed += '&amp;buying=false';
	    embed += '&amp;sharing=false';
	    embed += '&amp;download=false';
	    embed += '&amp;hide_related=true';
	    embed += '&amp;show_comments=false';
	    embed += '&amp;show_user=false';
	    embed += '&amp;show_reposts=false';
	    embed += '&amp;show_teaser=true';
	    embed += '&amp;visual=false';
	    embed += '&show_artwork=false';
	    embed += '&show_playcount=false';
	    embed += '&single_active=true';
	    iframe.setAttribute('src', embed.replace('ID', this.dataset.id));
	    iframe.setAttribute('height', '130');

	    setTimeout(function(){$this.append(iframe)}, 2500);

	});
});
