import React from 'react';

function TopicsPage() {
  return (
    <div>
            <h2>Web Dev Concepts</h2>
            <nav class="local">
                <a href="#webServers">Web Servers</a>
                <a href="#frontendDesign">Frontend Design</a>
                <a href="#images">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#css">CSS</a>
                <a href="#forms">Forms</a>
                <a href="#node">Node</a>
                <a href="#javascript">Javascript</a>
            </nav>
            <article id="webServers">
                <h3>Web Servers</h3>
                <p>
                    The term <strong>“index”</strong>, in relation to websites and servers, often refers to the default file sent to a client's browser when a specific <strong>URL</strong> is accessed. 
                    It is typically the default resource dispatched in response to a client's <strong>HTTP request.</strong>
                    For instance, when a user types in “http://www.example.com/,” the request fetches “/index.html” as it is the file from the root directory. 
                    In many cases, <strong>the index.html</strong> serves as the website's main or home page, essentially acting as the gateway to the rest of the site's content. 
                    Most web servers follow the convention of mapping "/" to "/index.html" as the default homepage. 
                    For example, Apache (used by OSU Engineering) uses "index" as the default file, while Microsoft's .NET platform allows "default.html."
                </p>
                <p>
                    Utilizing the Web Dev/Inspector tool reveals several differences between accessing the site through the web server or locally. 
                    When examining the network tab locally, one observes a status code of 200, yet there are no tabs that display the method or domain. 
                    It also provides a “failed status” for <strong>main.css</strong> and <strong>main.js</strong>, since those files do not exist locally. 
                    In contrast, when using the web developer tool when accessing the resource on the web server, the network tab in chrome provides extensive information. 
                    The tools reveal the HTTP GET method used to request the file, as well as the domain.
                    In regard, to <strong>HTTP request headers</strong> in the network tab there are no HTTP request headers, but there is an HTTP response header, which shows the "content-type: text/html". The request header tells the browser the format of the resource. 
                    Whereas, for the web server, the <strong>HTTP request header</strong> indicates the different types of data the client can handle. On the web server, it shows several formats from the “Accept” header, such as text/html, application/xhtml+xml, application/xml, image/avif, image/webp, and /;q=0.8.
                    Similarly, the <strong>HTTP response header</strong> provides details such as content encoding (gzip), content length (1264 bytes), content type (text/html), server information (Apache/2.4.6). 
                </p>
                <p>
                    The <strong>“favicon.ico”</strong> has a status code of 200 even though it does not exist locally since its a default file that exists on OSU's servers, and is automatically added. 
                    The CSS and JS files return a 404 status code, which indicates “not found”, which means the requested resource is not found on the server since it does not exist.
                </p>
                <p>
                    A <strong>URL</strong> consists of several components: the <strong>scheme, subdomain, host domain, and path or resource.</strong> First, for the URL accessed on the web server, the <strong>scheme</strong> which is the “http://” this is the protocol that is used to access the resource. 
                    The second part is the <strong>subdomain</strong> which is the “web.engr”, indicating that it is part of a subsection of the “oregonstate.edu” site. 
                    The third part, which is the <strong>domain</strong> is going to be the “engr.oregonstate.edu”. 
                    Lastly, the <strong>Path to Resource or resources</strong> is going to be “~patepram/a1-patepram” which indicates the specific resource in the directory.
                 </p>
            </article>
            <article id="frontendDesign">
                <h3>Frontend Design</h3>
                <p>
                    Frontend design is a crucial step in the web development process. 
                    Its primary goal is to create the most appropriate experience for users. 
                    This involves designing the user interface, <strong>UI</strong>, or visual interface of the site, as well as the interactive experience. 
                    The visual design aspect requires a consistent: color scheme, font, typography scheme, icon, illustration scheme, and navigation system. 
                    Also, it relates to <strong>usability</strong>, as it measures the quality of a user's experience when interacting with the system.
                </p>
                <dl>
                    <dt><strong>Effective:</strong></dt>
                    <dd>The design is successful in assisting users to meet their goals and producing accurate results. </dd>

                    <dt><strong>Efficiency:</strong></dt>
                    <dd>The design enables ones to perform tasks with the least number of steps involved and obtain results quickly. </dd>

                    <dt><strong>Easy to Navigate:</strong></dt>
                    <dd>The design is intuitive and allows new users to easily navigate through the site, enabling them to understand how to locate their goals with ease.</dd>

                    <dt><strong>Error-free:</strong></dt>
                    <dd>The design of the site avoids accessibility and availability issues by understanding and considering common errors created by users and planning accordingly to prevent them. </dd>

                    <dt><strong>Enjoyable:</strong></dt>
                    <dd>The design of the site is unique for its intended audience, and it provides an engaging experience for its users.</dd>
                </dl>
                <p>
                    Page layout tags in HTML play a crucial role in structuring and organizing web page content. 
                    Each tag serves a specific purpose in creating a well-designed and user-friendly layout. 
                    The tags, including header, nav, main, section, article, aside, figure, blockquote, footer, and div, contribute to the overall structure and organization of the content. 
                    The main tag holds the primary content, while section and article tags, group related concepts. 
                    Tags like aside, figure, blockquote, and footer provide additional functionality and styling to enhance accessibility and create an enjoyable user experience.
                </p>
                <ol>
                    <li><strong>Linking to External Content Anchor:</strong> Utilizes the <q>a</q> tag that creates a hyperlink to external content. It utilizes “href" attribute which specifies the URL for the link. It creates a clickable link that directs users to the external content.</li>
                    <li><strong>Linking to Internal Content Anchor:</strong> Links to sections within the same page by using the “href” attribute to set the ID of the target element.</li>
                    <li><strong>Linking from Page-to-Page Anchor:</strong> These page-to-page anchors are used to link pages within one the same website. It is often used to create navigational menus that guide users from one page to another. Also, it utilizes relative URLs with the href attribute to specify the target path to the same page.</li>
                  </ol>
            </article>
            <article id="images">
                <h3>Optimizing Images</h3>
                <p>
                    The six major specifications of images for the web are: descriptive file name, small file size, exact dimensions, correct file format, reduced resolution, and color mode. These specifications ensure optimized loading times by using a descriptive file name to improve search engine optimization (SEO). 
                    Reducing file size ensures the smallest possible size, leading to the fastest load times. Exact dimensions ensure that the images are cropped and resized to fit the dimensions of the space on the webpage. 
                    Correct file format ensures that online photos are in the proper format, such as: <strong>.JPG</strong> for photographs, <strong>.GIF</strong> or <strong>8-bit .PNG</strong> for line-art images, and <strong>24-bit .PNG</strong> for graphics. 
                    Reduced resolution and color mode are used to ensure that multiple image sizes are available, as monitors render between 72 and 300+ pixels. Additionally, the appropriate color mode is selected based on the image type and format.
                </p>
                
                <p>
                    The most appropriate file formats for photos are <strong>JPEG and WebP</strong>. <strong>JPEG</strong>  is commonly used for photographic images, as it can compress files to smaller sizes while maintaining good quality and rectangular dimensions. Similarly, <strong>WebP</strong>  is also suitable for photographic images, as it offers efficient compression and retains rectangular shapes, resulting in smaller file sizes. While for line art, GIF (.GIF), .PNG, and .SVG are the best formats. 
                    This is due to the fact that the <strong>GIF</strong> file format allows animation and has 8-bit transparency, making it suitable for line art. Along with this, <strong>PNG</strong> provides true transparency, and it can be placed over a variety of colors with no distortion. Lastly, <strong>SVG</strong> is a vector-based format that is mathematically derived, and it is marked with XML, so it is great for 2-D or animated images. 
                </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p> 
                    Browsers and other devices use <strong>favicons</strong>, which are small icons, to identify websites and apps. They are typically saved in multiple formats, such as: <strong>.GIF, .PNG, .ICO and .SVG</strong>. The process for <strong>favicons</strong> starts off with symbols, and they get modified to work on a variety of devices in various file formats. 
                    In turn, the browser picks up these files and saves the icon and anchor to a bookmark or favorites list.
                </p>
            </article>
            <article id="css">
                <h3>Cascading Style Sheets</h3>
                <p> 
                    The incorporation of stylesheets in websites and apps is vital for enhancing the visual appeal, usability, and overall user experience of the site or app. 
                    <strong>CSS</strong> redefines the structure, content and components of the HTML file and influences the way they look to improve readability, legibility, and adherence to brand requirements. 
                    Cascading Style Sheets allow for the creation of consistent, and appealing designs that are user-friendly, and make it easier for the users to navigate the website or app ensuring a cohesive experience for the user. 
                    
                </p>
                <p>
                    As CSS provides several ways to incorporate the styles, there are five methods: <strong> external CSS files, embedded CSS, inline CSS, JavaScript template literals, and regular JavaScript</strong>. 
                    <strong>External CSS</strong> rules are a stylesheet that's linked into the global head area of the website. <strong>Embedded and inline</strong> are in the HTML text, but the difference is that embedded is put into a style tag and inline is within the element using an attribute and value. 
                    Then <strong>JavaScript Template Literals</strong> are within a JavaScript function and are definitely explicitly added, whereas in regular <strong>JavaScript</strong>, the styles are added by manipulating the Document Object Model (DOM). 
                </p>
            </article>
            <article id="forms">
                <h3>Forms</h3>
                <p>
                    The six major goals of accessible forms are crucial for creating a user-friendly experience, particularly for individuals with disabilities. These goals are mandated under the ADA requirements, known as <strong>'Section 508,'</strong> which emphasizes the need for accessibility on all websites.
                    The six major goals are: <strong>provide clear vision, let the users know why we're gathering their data, set the first field to autofocus, ensure each form control can be filled in using the keyboard, add tab indexing to complex forms, and ensure validation messages are screen readable.</strong>
                </p>
                <p>
                    The HTML form tags play a crucial role in creating interactive and accessible forms on websites. These major elements are:<strong>form, fieldset & legend, label, input, textarea, select & option, and button.</strong> The <strong>form tag</strong> encapsulates the form's content, and its attributes <strong>action</strong> specifies where the data is sent. While the <strong>method</strong> attribute is part of the <strong>GET or POST</strong> aspect of the HTTP method.
                    Next, the <strong>fieldset and legend tags</strong> are part of creating logical sections to meet accessibility standards, and the <strong>legend</strong> tag helps the users understand the form's purpose.  The <strong>label tag</strong> assists users in understanding the purpose of entering their data.
                    Whereas, the <strong>input tag</strong> commonly used, and has<strong>type</strong> and <strong>required</strong> attributes that make sure it determines the usage, and make sure the field is essential to fill out. Furthermore, the <strong>textarea</strong> tag allows users to input multiple lines. While the select with option tags: provide users with a drop-downlist of choices. 
                    Finally, the <strong>button</strong> is an input type that triggers an action when clicked. 
                </p>
                <p>
                    To improve the usability and accessibility of web forms, there are a few major form style recommendations that are good to follow. 
                    These include customizing fieldset and legend elements to create visually distinct form sections, displaying labels above form controls with appropriate font sizes, accommodating varying finger and hand sizes by increasing font sizes and padding, providing feedback on input validity through color changes for required and invalid fields, adjusting placeholder text for better readability, customizing checked box and radio button styles, and styling disabled and enabled attributes to communicate form accessibility. 
                </p>
            </article>
            <article id="node">
                <h3>Node.js, NPM and Express </h3>
                <p>
                    The three technologies that are used to allow web developers to create efficient, creative, and scalable applications. The usage of <strong>Node.js, NPM and Express</strong> are linked to a powerful development experience to create modern web applications.
                    <strong>Node.js</strong> is an open-source platform that allows developers to execute JavaScript code outside a web browser. It is used to develop server side and networking applications. As <strong>NPM or (Node Package Manager)</strong> is a package manager tool for node that allows developers to share and manage modules of reusable code that make programming more efficient. 
                    Lastly, <strong>Express.js</strong> is a framework that provides <strong>API or (Application Programming Interface)</strong> of common tasks that websites do. <strong>Express</strong> provides the ability to handle HTTP requests and responses. 
                    Overall, by using all three, it makes it easier for developers to efficiently streamline the process of developing their website and enhance the user experience in several ways. 
                </p>
            </article>
            <article id="javascript">
                <h3>Javascript</h3>
                <p>
                    The main data types in JavaScript are:<strong>numbers, Boolean, strings, symbols, undefined, null and objects.</strong> Any values other than objects are primitive types. 
                </p>
                <p>
                    In <strong>JavaScript objects, arrays and JSON</strong> are used to organize and store data. 
                </p>
                <p>
                    In <strong>JavaScript</strong>, conditionals and loops are used as control structures to repeat code based on set conditions. 
                    They utilize conditionals like <strong>"if” </strong> and <strong>"switch” </strong> statements to execute different blocks of code based on true/false or matching specific cases. 
                    There are different types of loops from while, do while and for loops, they all execute blocks of code until the condition is met. 
                </p>
                <p>
                    <strong>Object-oriented Programming (OOP)</strong> focuses on creating objects which can be considered blueprints that hold data and methods. 
                    By using OOP, developers are able to organize code in a clear manner and promote usability by creating objects that be used several times, alongside allowing for reuse through inheritance as well. 
                </p>
                <p>
                    <strong>Functional programming</strong> is a programming method that centers around mathematical functions and emphasizes the use of pure functions, which avoid changing data. This approach results in code that is easier to understand, test, and maintain.
                </p>
            </article>
            </div>
          );
        }
        
        export default TopicsPage;
          