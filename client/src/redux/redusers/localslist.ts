


export interface ILocObject{
    local_id: string,
    local_name:  string,
    local_adress:  string,
    local_station:  string,
    local_timework: {
        opened_list: [

        ],
        short:  string,
    }
}
export interface ILocs {
    list: ILocObject[]
}

const locs: ILocs = {
    list: [
        {
            local_id: '0001',
            local_name: 'pharms HDL',
            local_adress: 'Konstructorov street, 12',
            local_station: 'Nevsky aveny',
            local_timework: {
                opened_list: [

                ],
                short: 'mon - sun, 10h - 22h'
            }
        },
        {
            local_id: '0002',
            local_name: 'pharms HDL',
            local_adress: 'Korablestroiteley street, 4',
            local_station: 'Pioneerskay aveny',
            local_timework: {
                opened_list: [

                ],
                short: 'mon - sun, 10h - 22h'
            }
        },
        {
            local_id: '0003',
            local_name: 'pharms HDL',
            local_adress: 'Sadovay street, 56',
            local_station: 'Gostin aveny',
            local_timework: {
                opened_list: [

                ],
                short: 'mon - sun, 10h - 22h'
            }
        },
        {
            local_id: '0004',
            local_name: 'pharms HDL',
            local_adress: 'Nevsky street, 11',
            local_station: 'Nevsky station',
            local_timework: {
                opened_list: [

                ],
                short: 'mon - sun, 10h - 22h'
            }
        },
    ]
}

const Locals = (locsdef : ILocs  = locs, action : any) : ILocs | undefined => {
    switch (action.type) {
        case "":
            
           return({...locsdef});
    
        default:
            return({...locsdef})
    }
}

export default Locals;