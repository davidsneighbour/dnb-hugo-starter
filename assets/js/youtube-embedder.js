jQuery(document).ready(function($) {

  var div, n, v = document.getElementsByClassName("youtube-player");
  for (n = 0; n < v.length; n++) {
    div = document.createElement("div");
    div.setAttribute("data-id", v[n].dataset.id);
    div.innerHTML = labnolThumb(v[n].dataset.id);
    div.onclick = labnolIframe;
    v[n].appendChild(div);
  }

  function labnolThumb(id) {
    var thumb = '<img src="/images/youtube/ID.jpg" class="preview" width="930">';
    var play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
  }

  function labnolIframe() {
    var iframe = document.createElement("iframe");
    var embed = "https://www.youtube.com/embed/ID?autoplay=1";
    embed += '&controls=0'; //show video player controls
    embed += '&hl=de'; // set language to de
    embed += '&iv_load_policy=3'; // do not show video annotations by default
    embed += '&modestbranding=1'; // not too much branding
    embed += '&rel=0'; // do not show related videos
    embed += '&showinfo=0'; // do not show information
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("class", "embed-responsive-item");
    this.parentNode.replaceChild(iframe, this);
  }
});
