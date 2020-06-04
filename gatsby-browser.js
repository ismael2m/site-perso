// == Restauration du scroll au changement de page version StackOverFlow

// exports.shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition,
// }) => {
//   const { pathname } = location;
//   // list of routes for the scroll-to-top-hook
//   const scrollToTopRoutes = ['/'];
//   // if the new route is part of the list above, scroll to top (0, 0)
//   if (scrollToTopRoutes.indexOf(pathname) !== -1) {
//     window.scrollTo(0, 0);
//   }

//   return false;
// };


// == Restauration du scroll au changement de page version officiel (Gatsby)

// exports.shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition,
// }) => {
//   const currentPosition = getSavedScrollPosition(location);
//   // const queriedPosition = getSavedScrollPosition({ pathname: '/' });

//   window.scrollTo(...(currentPosition || [0, 0]));

//   return false;
// };

const transitionDelay = 450;

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay,
    );
  }
  return false;
};
