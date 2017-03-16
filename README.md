# Dan Yuschick Portfolio
#### [www.DanYuschick.com](http://www.danyuschick.com)

This repo contains my working progress on my latest portfolio redesign. Not only will this build be a full redesign from the existing layout but it also deviates from my prior use of Ember in favor of React. The project was initially set up using `create-react-app` with Yarn handling my packages. The content will be synced with Firebase much like the current site but there will be a slight JSON restructuring for easier maintainability.

## Shouts
- [Hero Patterns](http://www.heropatterns.com/) for the Gears SVG background
- Wes Bos for help with React

## To Do
- [ ] Create state for the About content
- [x] Create state for the Blog content
- [x] Make `ProjectFull` component dynamic
- [x] Make `BlogPreview` component dynamic
- [x] Handle responsiveness
- [x] Diagnose Router and History issue (not being able to click back) with the `/work` and `/work/:id`
- [ ] Add animated watch design behind navigation
- [x] Extract `app.css` to component-driven stylesheets
- [x] Explore using project titles instead of IDs in the url
- [ ] Integrate with DeployBot
- [x] Allow refresh on project details page
- [x] Show loader during Ajax requests
- [ ] Figure out the empty home page
- [ ] Dig into Redux for consistent State management, specifically for the projects section
- [x] Remove `state.blogs` from App and move it to the blog component
- [x] Adjust Project Full links to only show when available

#### Stretch
- [ ] Admin login via Facebook
- [ ] Auth in Firebase
- [ ] CRUD behavior for projects, blogs, and about content
- [ ] Add search functionality for blog
