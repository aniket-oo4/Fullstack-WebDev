// event is any action which is performed by user on element and after event occurs then apropiate event handler is called by that element 
// user performs -->> event on -->> element then it calls-->event handler (appropriate code ) (function)


// list of important events
/*
1.click
2.dblclick
3.mouseover
4.mouseout   (use mousehover for both events)
5.mousemove
6.keyup   
7.keypress
8.focus
9.blur
10.contextmenu (right click of mouse )
11.cut
12.copy
13.paste 
14.change 
15.mousedown
16.mouseup
etc search more on mdn js documentation website 


Event -keyboard/mouse action
    user-->event-->function
    *Event handling is process of creating relation between  "event " and "function" ; so that ,when the user performs some event  it execute the corresponding function automatically .

    //Syntax of event handling
        element.addEvenListner("event name ",functionname);
        ex:  btn.addEventListner("click",sayHello);

        // by using add EventListner we can add multiple methods to single events to single element  (but most of the cases we dont need to assign multiple functions to single event )
        
        //we can add events to elements in 3 ways :
            1.inline  : using "on" as prefix to events 
            <button onclick="console.log('hello wolrd')">
            2. using method name inline 
                <button mousover="sayHello()">
            3. using external js file 
                element.addEventListener("click",sayHello);
            // the event handler function also accepts automatticaly parameter as event it consist of all information about about where happened what did etc
             int that target means the element 

*/