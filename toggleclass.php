  <div onclick="changeBg();"> </div>

<script>
    const divElem = document.getElementsByClassName("search-widget__drop");
    let toggle = true;

    function changeBg() {
        for(var i=0; i<divElem.length; i++)divElem[i].style.display = toggle ? 'block' : 'none'
        toggle = !toggle;
    }
</script>
