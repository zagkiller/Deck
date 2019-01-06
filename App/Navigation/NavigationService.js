import { NavigationActions } from 'react-navigation';

let Navigator;

function setTopLevelNavigator(navigatorRef) {
    Navigator = navigatorRef;
}

function navigate(routeName, params) {

    Navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}


function getCurrentRoute(navState = Navigator.state.nav) {
    if (navState.hasOwnProperty('index')) {
        return getCurrentRoute(navState.routes[navState.index]);
    } 
    
    return navState;
}

function getState() {
    return Navigator.state;
}

// add other navigation functions that you need and export them

export default {
    navigate,
    getState,
    getCurrentRoute,
    setTopLevelNavigator,
};
