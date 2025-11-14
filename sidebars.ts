import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Введение',
      link: {type: 'doc', id: 'introduction/index'},
      items: [
        'introduction/network-basics',
        'introduction/use-cases',
        'introduction/limitations',
      ],
    },
    {
      type: 'category',
      label: 'Устройства',
      link: {type: 'doc', id: 'devices/index'},
      items: [
        {
          type: 'category',
          label: 'Готовые ноды',
          link: {type: 'doc', id: 'devices/ready-made/index'},
          items: ['devices/ready-made/portable', 'devices/ready-made/solar'],
        },
        {
          type: 'category',
          label: 'Самодельные ноды',
          link: {type: 'doc', id: 'devices/diy/index'},
          items: ['devices/diy/esp', 'devices/diy/nrf', 'devices/diy/boards'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Антенны',
      link: {type: 'doc', id: 'antennas/index'},
      items: ['antennas/ready-made', 'antennas/diy'],
    },
    {
      type: 'category',
      label: 'Настройка ноды',
      link: {type: 'doc', id: 'node-setup/index'},
      items: [
        'node-setup/firmware',
        'node-setup/configuration',
        'node-setup/roles',
        {
          type: 'category',
          label: 'USB-драйверы',
          items: [
            'node-setup/serial-drivers/esp32',
            'node-setup/serial-drivers/nrf52',
            'node-setup/serial-drivers/test',
          ],
        },
        'node-setup/testing',
      ],
    },
    {
      type: 'category',
      label: 'Решение проблем',
      link: {type: 'doc', id: 'troubleshooting/index'},
      items: ['troubleshooting/not-visible'],
    },
    'community',
    'regulations',
  ],
};

export default sidebars;
