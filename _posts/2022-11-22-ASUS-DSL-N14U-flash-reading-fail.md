---
layout: post
title: ASUS DSL-N14U flash reading fail...
---

I have got an old ASUS DSL-N14U router laying around. I would love to reuse it for new projects but the outdated software it runs does not really fit my needs... I decided to have a look in order to see what could be done with it and if I could hack on it...

![ASUS DSL-N14U](/assets/2022-11-22/router.png)

After checking [ASUS support downloads](https://www.asus.com/es/supportonly/dsl-n14u/helpdesk_bios/) the latest release is found to be from 2020. Not bad for a 2015 router. Unfortunatelly, that release is still packing a 2.6.22 kernel that was released on 2007... Time to go my own way...

![ASUS DSL-N14U internals](/assets/2022-11-22/router_internals.jpeg)

Flash: 16MB (Macronix MX25L12835F)
RAM: 64MB
SoC: Ralink RT63365E

Router internals show quite a decent hardware for the time. Still usable!

Because I am a tinkerer, I went straight down the hardware path rabbit hole. First step, dumping memory contents...

I could find a [datasheet for the Macronix MX25L12835F](https://www.macronix.com/Lists/Datasheet/Attachments/8653/MX25L12835F,%203V,%20128Mb,%20v1.6.pdf) memory. On top of available documentation, it seems to be in the [supported hardware list for flashrom](https://www.flashrom.org/Supported_hardware). [Flashrom also supports Bus Pirate](https://www.flashrom.org/Bus_Pirate) as an interface device for reading and writing memories. I bought some SOP16 clips and manufactured a cable with the correct pinout.

![Macronix MX25L12835F absolute maximum ratings](/assets/2022-11-22/macronix_absolutes.png)

From the Macronix MX25L12835F datasheet I extracted the absolute maximum ratings. The memory should not be fed more than 4V so I decided to try and power the memory directly from the Bus Pirate at 3.3V. Soon I found that the Bus Pirate was powerful enough to power up the memory but also the microcontroller. Flashrom is able to detect the memory but soon after, the microcontroller starts to poll the memory ruining my dump...

A quick solution was to find the SoC reset pin and ground it so that the microcontroller would remain off while the dump takes place. The search did not yield any kind of datasheet or information on the RT63365E pinout.

Exploring the PCB it seems that there are 12V, 3.3V and ~1V power lines. I tried to search for pullup resistors from those powerlines that could be tied to a reset pin in the microcontroller to try and disable it. I was not convinced by any candidate... I needed to either be really sure or my fear of shorting everything out would keep me from trying to set any pin to 0V...

I found some SOP16 sockets and backup memory chips and ordered them. One possibility in the future would be to desolder the memory, solder the socket and in that way, I could swap memories for testing or in case I brick the device. For the time being, other solutions may be easier than going this route...
