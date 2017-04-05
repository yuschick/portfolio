# Dan Yuschick Portfolio
#### [www.DanYuschick.com](http://www.danyuschick.com)

This repo contains my working progress on my latest portfolio redesign. Not only will this build be a full redesign from the existing layout but it also deviates from my prior use of Ember in favor of React. The project was initially set up using `create-react-app` with Yarn handling my packages. The content will be synced with Firebase much like the current site but there will be a slight JSON restructuring for easier maintainability. Lastly, I have this integrated with DeployBot to automatically deploy any new builds that are committed to GitHub.

![Dan Yuschick dot com](https://github.com/yuschick/portfolio/blob/master/src/images/screenshot.jpg)

## Shouts
- [Hero Patterns](http://www.heropatterns.com/) for the Gears SVG background
- Wes Bos for help with [React for Beginners](http://www.reactforbeginners.com)

## Launch
- [x] Integrate with DeployBot
 - [x] Only deploy on new builds
- [x] Create state for the About content
- [x] Touch up < 400 breakpoints
- [x] Sticky nav on mobile
- [x] Implement loading per project preview
- [x] Create state for the Blog content
- [x] Make `ProjectFull` component dynamic
- [x] Make `BlogPreview` component dynamic
- [x] Handle responsiveness
- [x] Diagnose Router and History issue (not being able to click back) with the `/work` and `/work/:id`
- [x] Extract `app.css` to component-driven stylesheets
- [x] Explore using project titles instead of IDs in the url
- [x] Allow refresh on project details page
- [x] Show loader during Ajax requests
- [x] Figure out the empty home page
- [x] Remove `state.blogs` from App and move it to the blog component
- [x] Adjust Project Full links to only show when available

#### Post Launch
- [ ] Add animated watch design behind navigation
- [ ] Upgrade to React Router 4
- [x] Trace home icons to convert into SVG
- [ ] Dig into Redux and see about incorporating it into the project
- [ ] CRUD behavior for projects
- [x] CRUD behavior for blogs
- [x] CRUD behavior for about content
- [ ] Add search functionality for blog
- [ ] Look into the iOS double click issue on the nav
- [x] Resize hero images to help accommodate much larger screens
- [x] Auth in Firebase
- [x] Admin login via GitHub
