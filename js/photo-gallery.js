 function selectorFunc(id) {
        console.log('running?');
            let number = id.slice(7,8);
            let button = "button-" + number;
            let section = "section-" + number;
            console.log(section);
            div = document.getElementById(section);
            btn = document.getElementById(button);

            if (div.classList.contains('hide-topic')) {
                div.classList.remove('hide-topic');
                btn.classList.add('highlighted-btn');
                for (let i = 1; i<8; i++) {
                    if(i != number) {
                        console.log(i);
                        let divToAdd = "section-" + i;
                        let btnToRemove = "button-" + i;
                        dta = document.getElementById(divToAdd);
                        btr = document.getElementById(btnToRemove);
                        console.log("dtr" + divToAdd);
                        dta.classList.add('hide-topic');
                        btr.classList.remove('highlighted-btn');
                    }
                }
            }
            else {

                for (let i = 1; i<8; i++) {
                    if(i != number) {
                        dtr = document.getElementById(divToRemove);
                        let divToRemove = "section-" + i;
                        let btnToAdd = "button-" + i;
                        console.log("dtr" + divToRemove);
                        dtr.classList.remove('hide-topic');
                        bta = document.getElementById(btnToRemove);
                        bta.classList.add('highlighted-btn');   
                    }
                }
            }         
        }