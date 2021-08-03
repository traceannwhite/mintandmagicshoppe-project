# Project Overview

## Project Links

- [https://github.com/traceannwhite/project-2](https://github.com/traceannwhite/project-2)
- [https://project-2-r9a9l683v-traceannwhite.vercel.app/](https://project-2-r9a9l683v-traceannwhite.vercel.app/)

## Project Description

For this project, I am going to make an ecommerce site for selling candles similar to ecommerce sites like Northernism, Solo Stove, Etsy, or any other eCommerce website. I will use React to build the functionality and Saas CSS to design the application. I will create small amounts of content in Contentful to populate the website with content, mixed with possible additional API material if time allows in post MVP.

Design & Functionality Inspiration Links:

- Northernism | [https://northernism.com/](https://northernism.com/)
- Solo Stove | [https://www.solostove.com/] (https://www.solostove.com/?_ga=2.39969378.1589192523.1627671118-1027721920.1627671118)
- Larq | [https://www.livelarq.com/](https://www.livelarq.com/)
- Etsy[https://www.etsy.com/](https://www.etsy.com/)

## API

Contentful API access key: pk_kXSL20g3wwNlLA8kMIEnr9HWrrsabJoJYJukZuws
Space ID: 9w5oyr18u3p9

https://discovery.contentful.com/entries/by-content-type/product/%7Bentry_id%7D/?space_id=9w5oyr18u3p9&delivery_access_token=pk_kXSL20g3wwNlLA8kMIEnr9HWrrsabJoJYJukZuws

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [wireframes](https://res.cloudinary.com/dhcagrzcb/image/upload/v1627677948/IMG_1732_tolq1k.heic)
- [react architecture](https://res.cloudinary.com/dhcagrzcb/image/upload/v1627677948/IMG_1734_mvpagr.heic)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP EXAMPLE

- Header/navigation
  - Links to pages: Home, Products, Cart
- Main Page
  - Hero Image
  - Shop Now Button that links to products page
- Products Page
  - Display products from the API
  - Add to Cart Button
- Cart Page
  - Products added from products page are displayed in cart
- Footer
- Default Sass CSS for site

#### PostMVP EXAMPLE

- Header/navigation
  - Add additional pages/links to pages: About, Contact, Login/Create Account
  - Fancy CSS effects
- Main Page
  - Add Customer Reviews Carosel using React Strap
- About Page
  - Add text description of company
- Contact Page
  - Add contact form
- Login/Create Account Page
  - Add login/create account form
- Footer
  - Newsletter Signup
  - Social media links

## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

<!--
| Component    |                             Description                              |
| ------------ | :------------------------------------------------------------------: |
| App          |                    Sets up app with React Router                     |
| Header       |                Renders the header, including the nav                 |
| Footer       |                          Renders the footer                          |
| Main         |                  Contains Switch/Routes for content                  |
| Products     |           Renders the products page to display API info              |
| Question     |     Renders current question via API call and Answer components      |
| Answer       |         Renders a possible answer using props from Question          |
| Score        |            Renders player's score received through props             |
| HighScore    | Form that renders at end of game if the player achieves a high score |
| Options      |              Renders a form of selectable game options               |
| Instructions |                Renders rules and info about the game                 |
| Leaderboard  |               Renders list of top scorers via API call               | -->

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

Unless otherwise noted, time is listed in hours:

| MVP Component                                            | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create React app and files for all components and pages  |    H     |     30 min     |    30 min     |   30 min    |
| Basic Navbar & Footer                                    |    H     |       1        |    30 min     |   30 min    |
| Set up basic React routing                               |    H     |       1        |    30 min     |   30 min    |
| Make API call                                            |    H     |       2        |      1.5      |     1.5     |
| Create shop now button functionality                     |    H     |       3        |    30 min     |   30 min    |
| Static main page items                                   |    H     |       3        |      1.5      |     1.5     |
| Adding products from product page to cart page button    |    H     |       3        |       3       |      3      |
| Pull API product information                             |    H     |       3        |       2       |      2      |
| Add content to contentful                                |    H     |       1        |       1       |      1      |
| CSS Styling                                              |    H     |       3        |       3       |      3      |
| Additonal troubleshooting or research                    |    H     |       3        |       2       |      2      |
| Total                                                    |    H     |      23.5      |      16       |     16      |
| Post-MVP ----------------------------------------------- | -------- | -------------- | ------------- | ----------- |
| Remove from Cart Button                                  |    H     |       3        |               |             |
| Add function to +/- items in cart                        |    L     |       3        |               |             |
| Make customer review carousel with React Strap           |    M     |       3        |       1       |     Inc     |
| Add additional pages with static info                    |    M     |       2        |               |             |
| Add functionality to additional pages                    |    M     |       3        |               |             |
| Contact Form                                             |    M     |       2        |               |             |
| Signup/Newsletter                                        |    M     |       3        |               |             |
| Social Media Links                                       |    M     |       2        |               |             |
| Additional styling                                       |    L     |       3        |               |             |
| Total                                                    |    H     |       24       |               |             |

## Additional Libraries

ReactStrap
Saas CSS

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description. Code snippet should not be greater than 10 lines of code.

- TBD
