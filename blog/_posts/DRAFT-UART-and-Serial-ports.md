---
layout: post
title: UART and Serial ports
picture: /images/posts/2014-XX-XX-UART.jpg
keywords: Serial port, UART, find, hacking, tutorial
description: "UART ports in embeded devices may help you find vulnerabilities. Here's how to do it."
---

![uartport](/images/posts/2014-XX-XX-UART.png "UART port")

We're used to interact with devices through a screen and a keyboard. They are very practical and easy to use interfaces but sometimes can be too expensive for some devices to include them.
Embeded devices like routers simply don't need a graphical interface and we sometimes forget that ethernet or wifi are not the only access vectors that can be used to pentest this kind of devices.

Almost evey embeded device includes an UART port that gives access to a lot of useful information when looking for vulnerabilities. This type of ports are commonly hidden by the device case, but once opened, they're
usually easy to locate and provide lots of debug information and even consoles to interact.

<!--more-->

- How to interface an UART port:

An UART port consists on 4 wires. A 0 volt reference (GND), a transmission wire (Tx) and a reception one (Rx). A high voltage reference should be also there but it is not always present.
In order to interact with the devices we need some extra hardware. An example can be the [Bus Pirate](http://dangerousprototypes.com/bus-pirate-manual/) which is able to interface a lot of protocols but any other UART
to serial USB adapter can be used. Tx (Transmitting pin) of the device we are interfacing should be connected to Rx (Receiving pin) in our bus pirate. And Rx (Receiving pin) in device should be connected to
Tx (Transmission pin) in the adapter. Ground pin (GND) should be connected to ground pin. That's enough for transmitting and receiving data.

![Bus Pirate](/images/posts/2014-XX-XX-Bus_Pirate.jpg "Bus pirate")
![Bus Pirate connection diagram](/images/posts/2014-XX-XX-Bus_Pirate_connection.jpg "Bus pirate connection diagram")

Another option would be using an Arduino. If you hold an Arduino in reset mode the GPIO ports will be in tri-state mode, removing the processor from the circuit. In order to hold the processor in the reset mode just 
connect the reset pin with GND (active at low state). Now if you connect a serial device to pins 0 and 1 in the Arduino UNO the comunications will be fordwarded to your computer.

- How to locate the ports:

Locating an UART port starts with a visual inspection. Three or four pin headers and test points around the main chips are posible candidates. For the examples I will be using an old ZyXEL P660HW-D1. This router board 
is easy as it only contains two candidates and they have the header already soldered as can be seen in the image.

![p660hwd1board](/images/posts/2014-XX-XX-P660HW_D1_Board.png "P660HW-D1 Board")

Testing the GND pin is the easyest one. Metal cases are almost always grounded and we can use them to detect the ground pin. With a polymeter in "beep" mode, the device turned off and unplugged, put one of the probes 
in a metal case and with the other test the pins for an inmediate beep.

Once the GND pin is located it is not very difficult to locate the VCC pin in the "beep" mode. By putting one of the probes in the GND pin test 
the remaining pins for a very short beep. As voltage supplies don't always provide stable voltages, capacitors are used to stabilize noise so when 
the polymeter tests between VCC and GND it sees an almost short circuit while the capacitors get charged and when they get charged 
no current goes throught them so resistence raises stopping the beep. In addition, if we power up the device we can test for a 
estable voltage taking GND as a reference. They usually operate at a 3.3V level although 5V or 12V were common in older devices. In 
other devices VCC may not be available but we don't really need it.

Test for Tx
Test for Rx

- How to interact with them:


