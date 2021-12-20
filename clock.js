<script>
        let a;
        let date;
        let time;
        console.log("this is  javascript project by Badre prasad");
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setInterval(() => {
            a = new Date(); 
            date = a.toLocaleDateString(undefined, options);
            time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
            document.getElementById('time').innerHTML = time + "<br>on " + date;
        }, 1000);
    </script><script>
let a;
let date;
let time;
console.log("this is  javascript project by Badre prasad");
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date(); 
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time + "<br>on " + date;
}, 1000);
</script>