---
title: Драйверы USB для ESP32
sidebar_label: ESP32
---

Чтобы прошить или отлаживать ESP32‑устройства Meshtastic, системе нужны драйверы для USB‑UART мостов. В большинстве плат используются микросхемы CP210x от Silicon Labs или CH9102/CH340/CH341 от WCH. Ниже — прямые ссылки и рекомендации для каждой ОС.

## Linux

- [CP210x USB to UART Bridge](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)
- [CH9102/CH34x](http://www.wch-ic.com/downloads/CH341SER_LINUX_ZIP.html)

Большинство современных дистрибутивов уже включают эти модули ядра. Обновление актуально, если система не создаёт `/dev/ttyUSB*` при подключении платы.

## macOS

- [CP210x USB to UART Bridge](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)
- [CH9102/CH34x](https://github.com/WCHSoftGroup/ch34xser_macos)

После установки убедитесь, что система разрешила загрузку kext (на Apple Silicon — через Recovery). Если драйверы уже стояли, но устройство пропадает, переустановите пакет и перезагрузите Mac.

## Windows

- [CP210x USB to UART Bridge](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)
- [CH9102/CH34x](http://www.wch.cn/downloads/CH343SER_ZIP.html)
- [CH9102 для Windows 7 (прямая ссылка)](https://github.com/Xinyuan-LilyGO/CH9102_Driver)

После установки драйвера обязательно перезагрузите систему — иначе порт не появится в «Диспетчере устройств».

:::tip
На каждом этапе можно проверить, видит ли ОС плату — просто откройте «Диспетчер устройств»/`lsusb` и убедитесь, что появилось новое устройство USB‑UART. Подробный тест описан в разделе [«Проверка установки драйверов»](./test.md).
:::

## Что дальше

Когда драйверы работают и порт виден, переходите к прошивке и настройке:

- [Общая инструкция по прошивке](../firmware.md)
- [Настройка Meshtastic после прошивки](../configuration.md)
