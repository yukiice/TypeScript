let maps = [{
    item: [1, 2, 3, 4, 5]
}, {
    item: [11, 12, 13, 15]
}]

async function mapss(data) {
    let status = true
    let first = true
    await Promise.all(data.map(async(item, index) => {
        function q() {
            if (first) {
                status = false
                console.log('q', index);
                first = false
                setTimeout(() => {
                    status = true
                    first = false
                    console.log('right q');
                }, 3000)
            }
        }

        function b() {
            status = false
            console.log('b', index);
            setTimeout(() => {
                status = true
                console.log('right b');
            }, 300)
        }
        if (status) {
            await q();
        }
        if (status) {
            await b();
        }
        console.log('c', index);

    }))
}

mapss(maps)