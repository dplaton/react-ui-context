import uuid from 'uuid/v1';
export default {
    tree: {
        id: uuid(),
        title: 'A',
        children: [
            {
                id: uuid(),
                title: 'B'
            },
            {
                id: uuid(),
                title: 'C',
                children: [
                    {
                        id: uuid(),
                        title: 'E'
                    },
                    {
                        id: uuid(),
                        title: 'F'
                    }
                ]
            },
            {
                id: uuid(),
                title: 'D',
                children: [
                    {
                        id: uuid(),
                        title: 'G'
                    }
                ]
            }
        ]
    }
};
