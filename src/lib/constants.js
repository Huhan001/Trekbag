export const Listings = [
    {
        name: 'phone',
        packed: false,
        id: 1
    },
    {
        name: 'laptop',
        packed: false,
        id:2
    },
    {
        name: 'charger',
        packed: false,
        id:3
    }
]

export const secondayButton = ['Mark all as complete','Mark all as incomplete',
    'Reset to initial','Remove all items']

//export default listings;
//cannot be sent by default because it is not a component


export const optionProvider = [
    { value: 'default', label: 'Sort by default' },
    { value: 'packed', label: 'Sort by packed' },
    { value: 'unpacked', label: 'Sort by unpacked' },
  ];