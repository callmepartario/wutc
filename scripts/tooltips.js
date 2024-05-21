window.addEventListener("load", function () {
    $("a[href^=\\#details-]")
        .tooltip({
            html: true,
            title: function () {
                return $(this.href.substring(this.href.lastIndexOf("#"))).clone().wrap('<ul class="list-unstyled wutc-list-details"></ul>').parent()
            }
        })
})