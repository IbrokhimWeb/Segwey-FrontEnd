/* eslint-disable default-case */
export default function ReportFunction(state, action) {
    switch(action.type){
        case 'change':
            return state.map((items, indexes) => {
                if(indexes === action.index){
                    return {...items, active: !items.active}
                }else {
                    return {...items, active: false}
                }
                return items
            })

        default: return state
    }
}