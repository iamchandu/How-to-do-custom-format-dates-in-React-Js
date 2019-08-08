import React from 'react';

const Date = (props) =>{
      const montsArr = ["","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const inputformat = props.input.split('-');
      const outputformat = props.output.split(props.outputDelemeter);
      const dateval = props.data.split('-');
      const dateObj = {};
      dateval.forEach((element, i) => {
            dateObj[inputformat[i]] = element;
            switch(inputformat[i]) {
                   case 'M':
                        dateObj.m = montsArr.findIndex(v=> v === element);
                        break;
                  case 'm':
                        dateObj.M = montsArr[Number(element)];
                        break;
                  case 'y':
                        dateObj.Y = '20'+element;
                        break;
                  case 'Y':
                        dateObj.y = element.substring(0,2);
                        break;
                  case 'd':
                        let daysurfex = 'th';
                        if(Number(element) === 1 || Number(element) === 21){
                              daysurfex = 'st';
                        } else if(Number(element) === 2 || Number(element) === 22) {
                              daysurfex = 'nd';
                        } else if(Number(element) === 3) {
                              daysurfex = 'rd';
                        }
                        dateObj.D = element+daysurfex;

            }
      });
      let finalDate = '';
      outputformat.forEach((v,i) => {
            if(finalDate){
                  finalDate+=props.outputDelemeter;
            }
            finalDate+=dateObj[v];
      })
      return (
            
            <h5>{finalDate}</h5>
      )

}

export default Date;