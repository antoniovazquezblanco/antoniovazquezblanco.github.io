---
layout: post
title: UART and Serial ports
picture: /images/posts/2014-XX-XX-UART.jpg
keywords: Serial port, UART, find, hacking, tutorial
---

![uartport](/images/posts/2014-XX-XX-UART.png "UART port")

We're used to interact with devices through a screen and a keyboard. They are very practical and easy to use interfaces but sometimes can be too expensive for some devices to include them. Embeded devices like routers simply don't need a graphical interface and we sometimes forget that ethernet or wifi are not the only access vectors that can be used to pentest this kind of devices.

Almost evey embeded device includes an UART port that gives access to a lot of useful information when looking for vulnerabilities. This type of ports are commonly hidden by the device case, but once opened, they're usually easy to locate and provide lots of debug information and even consoles to interact.

<!--more-->

- How to interface an UART port:

An UART port consists on 4 wires. A 0 volt reference (GND), a transmission wire (Tx) and a reception one (Rx). A high voltage reference should be also there but it is not always present.
In order to interact with the devices we need some extra hardware. An example can be the [Bus Pirate](http://dangerousprototypes.com/bus-pirate-manual/) which is able to interface a lot of protocols but any other UART to serial USB adapter can be used. Tx (Transmitting pin) of the device we are interfacing should be connected to Rx (Receiving pin) in our bus pirate. And Rx (Receiving pin) in device should be connected to Tx (Transmission pin) in the adapter. Ground pin (GND) should be connected to ground pin. That's enough for transmitting and receiving data.

![Bus Pirate](/images/posts/2014-XX-XX-Bus_Pirate.jpg "Bus pirate")
![Bus Pirate connection diagram](/images/posts/2014-XX-XX-Bus_Pirate_connection.jpg "Bus pirate connection diagram")

- How to locate the ports:

Locating an UART port starts with a visual inspection. Three or four pin headers and test points around the main chips are posible candidates. For the examples I will be using an old ZyXEL P660HW-D1. This router board 
is easy as it only contains two candidates and they have the header already soldered as can be seen in the image.

![p660hwd1board](/images/posts/2014-XX-XX-P660HW_D1_Board.png "P660HW-D1 Board")

Test for GND
Test for VCC if any
Test for Tx
Test for Rx

- How to interact with them:
