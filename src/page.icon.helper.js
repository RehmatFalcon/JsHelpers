const PAGE_ICON_HELPER = {
    UpdatePageFavIcon : function(iconUrl) {
        let icon = document.querySelector("link[rel*='icon']");
        if(icon === null) {
            icon = document.createElement("link");
            icon.setAttribute("rel", "icon");
            document.head.appendChild(icon);
        }
        icon.href = iconUrl;    
    }
};