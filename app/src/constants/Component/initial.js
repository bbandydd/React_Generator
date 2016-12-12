export const initialState = {
    componentName: 'Component',
    group: [
        {
            text: 'Life Cycle',
            children: [
                {name: 'componentWillMount', clicked: false},
                {name: 'componentDidMount', clicked: false},
                {name: 'componentWillReceiveProps', clicked: false},
                {name: 'shouldComponentUpdate', clicked: false},
                {name: 'componentWillUpdate', clicked: false},
                {name: 'componentDidUpdate', clicked: false},
                {name: 'componentWillUnmount', clicked: false}
            ]
        },{
            text: 'React Router',
            children: [
                {name: 'Link', clicked: false}
            ]
        }, {
            text: 'Redux',
            children: [
                {name: 'connect', clicked: false}
            ]
        }
    ]
}