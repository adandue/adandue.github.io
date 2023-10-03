const $modal1 = document.getElementById('modal1');
            const $modal2 = document.getElementById('modal2');
            const $modal3 = document.getElementById('modal3');
            const $modal4 = document.getElementById('modal4');
            const $modal5 = document.getElementById('modal5');
            const $modal6 = document.getElementById('modal6');
            const $modal7 = document.getElementById('modal7');
            const $modal8 = document.getElementById('modal8');
            const $overlay = document.getElementById('overlay');
            const $icon1 = document.getElementById('icon1');
            const $icon2 = document.getElementById('icon2');
            const $icon3 = document.getElementById('icon3');
            const $icon4 = document.getElementById('icon4');
            const $icon5 = document.getElementById('icon5');
            const $icon6 = document.getElementById('icon6');
            const $icon7 = document.getElementById('icon7');
            const $icon8 = document.getElementById('icon8');
            const $hidemodal = document.getElementById('hide-modal');
            const $hidemodal2 = document.getElementById('hide-modal2');
            const $hidemodal3 = document.getElementById('hide-modal3');
            const $hidemodal4 = document.getElementById('hide-modal4');
            const $hidemodal5 = document.getElementById('hide-modal5');
            const $hidemodal6 = document.getElementById('hide-modal6');
            const $hidemodal7 = document.getElementById('hide-modal7');
            const $hidemodal8 = document.getElementById('hide-modal8');
        
            $icon1.addEventListener('click', (event) =>
                {
                    //console.log(event);
                    $modal1.style.animation = 'modalIn .8s forwards';
                    $overlay.classList.add('active');
                });
            $hidemodal.addEventListener('click', (event) => 
                {
                    $modal1.style.animation = 'modalOut .8s forwards';
                    $overlay.classList.remove('active');
                });
        
            $icon2.addEventListener('click', (event) =>
                {
                    // console.log(event);
                    $modal2.style.animation = 'modalIn .8s forwards';
                    $overlay.classList.add('active');
                });
            $hidemodal2.addEventListener('click', (event) => 
                {
                    $modal2.style.animation = 'modalOut .8s forwards';
                    $overlay.classList.remove('active');
                });
        
            $icon3.addEventListener('click', (event) =>
                {
                    // console.log(event);
                    $modal3.style.animation = 'modalIn .8s forwards';
                    $overlay.classList.add('active');
                });
            $hidemodal3.addEventListener('click', (event) => 
                {
                    $modal3.style.animation = 'modalOut .8s forwards';
                    $overlay.classList.remove('active');
                });
        
            $icon4.addEventListener('click', (event) =>
                {
                    // console.log(event);
                    $modal4.style.animation = 'modalIn .8s forwards';
                    $overlay.classList.add('active');
                });
            $hidemodal4.addEventListener('click', (event) => 
                {
                    $modal4.style.animation = 'modalOut .8s forwards';
                    $overlay.classList.remove('active');
                });
        
            $icon5.addEventListener('click', (event) =>
                {
                    // console.log(event);
                    $modal5.style.animation = 'modalIn .8s forwards';
                    $overlay.classList.add('active');
                });
            $hidemodal5.addEventListener('click', (event) => 
                {
                    $modal5.style.animation = 'modalOut .8s forwards';
                    $overlay.classList.remove('active');
                });
        
            $icon6.addEventListener('click', (event) =>
                {
                    // console.log(event);
                    $modal6.style.animation = 'modalIn .8s forwards';
                    $overlay.classList.add('active');
                });
            $hidemodal6.addEventListener('click', (event) => 
                {
                    $modal6.style.animation = 'modalOut .8s forwards';
                    $overlay.classList.remove('active');
                });
            $icon7.addEventListener('click', (event) =>
                {
                    // console.log(event);
                    $modal7.style.animation = 'modalIn .8s forwards';
                    $overlay.classList.add('active');
                });
            $hidemodal7.addEventListener('click', (event) => 
                {
                    $modal7.style.animation = 'modalOut .8s forwards';
                    $overlay.classList.remove('active');
                });
            $icon8.addEventListener('click', (event) =>
                {
                    // console.log(event);
                    $modal8.style.animation = 'modalIn .8s forwards';
                    $overlay.classList.add('active');
                });
            $hidemodal8.addEventListener('click', (event) => 
                {
                    $modal8.style.animation = 'modalOut .8s forwards';
                    $overlay.classList.remove('active');
                });