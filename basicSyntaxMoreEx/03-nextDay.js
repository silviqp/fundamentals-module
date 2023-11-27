
    function nextDay(year, month, day) {
        let nextDay = new Date(year, month - 1, day + 1);
        let theYear = nextDay.getFullYear();
        let theMonth = nextDay.getMonth() + 1;
        let date = nextDay.getDate();
        console.log(`${theYear}-${theMonth}-${date}`);
    }

 nextDay(2016, 9, 30)
