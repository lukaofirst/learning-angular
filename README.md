<h2>Learning Angular</h2>

<h4>Main Topics Learned</h4>

-   How an Angular App gets Loaded and Started
-   Creating a Component
    -   understanding the <code>@Component</code> decorator
    -   adding component "manually" and using the CLI
-   Databinding
    -   String Interpolation
    -   Property Binding
    -   Listening to User Events
    -   Two-Way-Binding
    -   Binding to Custom Properties using the <code>@Input()</code> decorator (Parent-Child Communication)
    -   Binding to Custom Events using the <code>@Output</code> decorator + <code>EventEmitter()</code> (Child-Parent Communication)
    -   Accessing the DOM using the Template Variables <code>#templateVariable</code> and <code>@ViewChild()</code> decorator
    -   Projecting Content with <code>ng-content</code> and accessing with <code>@ContentChild()</code> decorator
-   Directives
    -   Output Data Conditionally <code>\*ngIf</code>
    -   Styling Elements Conditionally <code>[ngStyle] [ngClass]</code>
    -   Outputting Lists <code>\*ngFor</code>
    -   Creating a custom Directive
    -   The usage of <code>@HostListener()</code>, <code>@HostBinding()</code> decorators
    -   Understanding and building a Structural Directive
-   Services
    -   Creating and Injecting a Service into Components
    -   Injecting Services into Services
    -   Using Services for Cross-Component Communication
-   Routes
    -   Setting up Routes and Nested Routes
    -   Navigating through Router Links
    -   Styling route links using <code>routerLinkActive</code>
    -   Navigating Programatically
    -   Passing and Fetching Parameters, Query Parameters and Fragment to Routes
    -   Adding a 404 Not Found Page and Redirect to a Route
    -   Protecting Routes using <code>CanActivate</code> interface
    -   Passing static data to a route
    -   Passing dynamic data to a route using Resolve Guard
-   Observables
    -   Creating an Observable (processing data, error or complete)
    -   The needed of unsubscribe custom observables
    -   Operators (mid-layer between Observable-Observer to manipulate the output)
    -   Subject (the "new-way" to handle <code>EventEmitter()</code> observable)
-   Forms
    -   Template-Driven Approach
        -   Creating, registering and submitting form data
        -   Adding validators (only native HTML form validation) and use them to output feedback messages
        -   Deep dive into databinding (No Binding, One Binding and Two-Way Bind)
        -   Grouping form controls
        -   Setting/Patching form values
    -   Reactive Approach
        -   Creating, synching and submitting form data
        -   Adding built-in Angular validators and output feedback messages
        -   Grouping controls
        -   Creating Custom Validators and Custom Async Validators
        -   Observables of a reactive form
        -   Setting/Patching form values
-   Pipes
    -   Using built-in pipes
    -   Creating custom pipes
    -   The filtering pipe's problem
    -   Chaining multiple pipes
-   Http Requests
    -   Injecting and using types with <code>HttpClient</code>
    -   Handling Errors
    -   Making CRUD operations
    -   Setting Headers and Query Params
    -   Changing the default response
    -   Interceptors
-   Modules and Lazy Loading
    -   Module's definition
    -   Using Shared Module (Declaring Components, Directives and Pipes only once)
    -   Lazy Loading
    -   Preloading Lazy Loaded Code
-   Standalone Components
    -   What they are and what changes?
    -   Building a Standalone Component
    -   Services, Routing and Lazy Loading with Standalone Component

<h4>Notes<h4>

-   This repo was made following the course: [Angular - The Complete Guide](https://www.udemy.com/course/the-complete-guide-to-angular-2/)
