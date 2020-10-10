var
        addAnchorToURL,
        removeAnchorFromURL;

addAnchorToURL = function(anchor) {
        let hash = location.hash;
        if (hash == '') {
                location.hash = '#' + anchor;
        } 
        else {
                let anchors = hash.substr(1).split('&');
                if (anchors.indexOf(anchor) == -1) {
                        location.hash += '&' + anchor;     
                }
        }
}

removeAnchorFromURL = function(anchor) {
        let hash = location.hash;
        if (hash != '') {
                let anchors = hash.substr(1).split('&');
                let removeIndex = anchors.indexOf(anchor);
                if (removeIndex != -1) {
                        anchors.splice(removeIndex, 1);
                        if (anchors.length > 0) {
                                location.hash = '#' + anchors.join('&');
                        } 
                        else {
                                location.hash = '';
                        }
                        
                }
        }
}