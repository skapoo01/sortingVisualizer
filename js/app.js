import {ArrayVisualizer} from './components/array-visualizer.js';

// BEGIN MODULE VARIABLES -----------------------------------------------------
var 
config = {
                main_html: `
                        <div class="header">
                                <button type="button" class="banner-toggler">Banner</button>
                                <button type="button" class="dialog-toggler">Dialog</button>
                        </div>
                        <div class="sorting-visualizer">
                                <div class="array-visualizer"></div>
                                <div class="controller"></div>
                        </div>
                        <div class="footer"></div>

                        <div class="banner"></div>
                        <div class="dialog"></div>
                `
        },
state = {
                container: null,
                isDialogDisplayed: false,
                isBannerDisplayed: false,
        },
components = {},
addComponents,
configModule,
init,
render,
toggleDialog,
toggleBanner,
onToggleDialog,
onToggleBanner;
// END MODULE VARIABLES -------------------------------------------------------




// BEGIN HELPER METHODS -------------------------------------------------------
// END HELPER METHODS ---------------------------------------------------------




// BEGIN DOM METHODS ----------------------------------------------------------
addComponents = function() {
        let container = state.container;

        components = {
                container: container,
                header: container.querySelector('.header'),
                dialogToggler: container.querySelector('.dialog-toggler'),
                bannerToggler: container.querySelector('.banner-toggler'),
                footer: container.querySelector('.footer'),
                sortingVisualizer: container.querySelector('.sorting-visualizer'),
                banner: container.querySelector('.banner'),
                dialog: container.querySelector('.dialog')
        }
}

toggleDialog = function(isDisplayed, callback) {
        let dialog = components.dialog;
        if (isDisplayed) { 
                dialog.style.display = 'none';
                state.isDialogDisplayed = false;
                if (callback) {
                        callback(dialog);
                }
                return true;
        } 
        else {
                dialog.style.display = 'block';
                state.isDialogDisplayed = true;
                if (callback) {
                        callback(dialog);
                }
                return true;
        }
}

toggleBanner = function(isDisplayed, message, callback) {
        let banner = components.banner;
        if (isDisplayed) {
                banner.style.display = 'none';
                state.isBannerDisplayed = false;
                if (callback) {
                        callback();
                }
        } 
        else {
                banner.style.display = 'block';
                banner.innerHTML = message;
                state.isBannerDisplayed = true;
                if (callback) {
                        callback();
                }
        }
}



// END DOM METHODS ------------------------------------------------------------




// BEGIN EVENT HANDLERS -------------------------------------------------------
onToggleDialog = function(e) {
        toggleDialog(state.isDialogDisplayed);
        return false;
}

onToggleBanner = function(e) {
        toggleBanner(state.isBannerDisplayed, 'Error message... Or notification!');
        return false;
}
// END EVENT HANDLERS ---------------------------------------------------------




// BEGIN PUBLIC METHODS -------------------------------------------------------
init = function(containerSelector) {
        state.container = document.querySelector(containerSelector);
        state.container.innerHTML = config.main_html;
        addComponents();
        
        state.isDialogDisplayed = false;
        components.dialogToggler.addEventListener('click', onToggleDialog);
        components.bannerToggler.addEventListener('click', onToggleBanner);
}

render = function() {
        
}

configModule = function(configObject) {
        
}
// END PUBLIC METHODS ---------------------------------------------------------

export {
        init,
        render
}