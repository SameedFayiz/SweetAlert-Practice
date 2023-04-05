var choice1 = (async () => {
    var img_;
    var price;
    var item;
    const inputOptions = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                'item1': 'Burgers',
                'item2': 'Desserts',
                'item3': 'Wraps'
            })
        }, 1000)
    })

    const { value: food } = await Swal.fire({
        title: 'Welcome To McDonalds',
        imageUrl: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_108,h_108/https://mcdonalds.com.pk/wp-content/uploads/2022/06/McDonalds_Logo.png',
        text: 'Our Menu',
        input: 'radio',
        inputOptions: inputOptions,
        inputValidator: (value) => {
            if (!value) {
                return 'Sir, You need to choose something!'
            }
        }
    })

    if (food === 'item1') {
        const inputOptions = new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    "Hot N' Crispy": "Hot N' Crispy",
                    'McChicken': 'McChicken',
                    'Cheese Burger': 'Cheese Burger'
                })
            }, 1000)
        })

        const { value: burger } = await Swal.fire({
            title: 'Select the burger you want',
            imageUrl: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_100,h_100/https://mcdonalds.com.pk/wp-content/uploads/2022/08/chicken-and-fish.jpg',
            input: 'radio',
            inputOptions: inputOptions,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to choose something!'
                }
            }
        })

        if (burger === "Hot N' Crispy") {
            img_ = 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://mcdonalds.com.pk/wp-content/uploads/2022/08/Hot-N-Crispy-1-178x178.png'
            price = 400
        }
        else if (burger === "McChicken") {
            img_ = 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://mcdonalds.com.pk/wp-content/uploads/2022/08/03-McChicken-178x178.png'
            price = 300
        }
        else if (burger === "Cheese Burger") {
            img_ = 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://mcdonalds.com.pk/wp-content/uploads/2022/08/05-Cheese-Burger-178x178.png'
            price = 335
        }
        item = burger
    }
    else if (food === "item2") {
        const inputOptions = new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    "Strawberry Shake": "Strawberry Shake",
                    'Chocolate Shake': 'Chocolate Shake',
                    'Brownie Sundae': 'Brownie Sundae'
                })
            }, 1000)
        })

        const { value: shake } = await Swal.fire({
            title: 'Select the Item you want',
            imageUrl: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_100,h_100/https://mcdonalds.com.pk/wp-content/uploads/2022/07/McCafe-pk-new.jpg',
            input: 'radio',
            inputOptions: inputOptions,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to choose something!'
                }
            }
        })

        if (shake === "Strawberry Shake") {
            img_ = 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://mcdonalds.com.pk/wp-content/uploads/2022/08/Strawberry-Shake-2-178x178.png'
            price = 250
        }
        else if (shake === "Chocolate Shake") {
            img_ = 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://mcdonalds.com.pk/wp-content/uploads/2022/08/Chocolate-Shake-1-178x178.png'
            price = 280
        }
        else if (shake === "Brownie Sundae") {
            img_ = 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://mcdonalds.com.pk/wp-content/uploads/2022/08/Sundae-Brownie-178x178.png'
            price = 380
        }
        item = shake
    }
    else if (food === "item3") {
        const inputOptions = new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    "Chipotle Wrap": "Chipotle Wrap",
                    'Chessy Mayo': 'Chessy Mayo',
                    'BBQ Wrap': 'BBQ Wrap'
                })
            }, 1000)
        })

        const { value: wrap } = await Swal.fire({
            title: 'Select the Item you want',
            imageUrl: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_178/https://mcdonalds.com.pk/wp-content/uploads/2022/08/wraps-178x178.png',
            input: 'radio',
            inputOptions: inputOptions,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to choose something!'
                }
            }
        })

        if (wrap === "Chipotle Wrap") {
            img_ = 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://mcdonalds.com.pk/wp-content/uploads/2022/08/Chipotle-Wrap-178x178.png'
            price = 250
        }
        else if (wrap === "Chessy Mayo") {
            img_ = 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://mcdonalds.com.pk/wp-content/uploads/2022/08/Cheese-Mayo-Wrap-178x178.png'
            price = 280
        }
        else if (wrap === "BBQ Wrap") {
            img_ = 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://mcdonalds.com.pk/wp-content/uploads/2022/08/BBQ-Wrap-178x178.png'
            price = 190
        }
        item = wrap
    }
    const { value: quantity } = await Swal.fire({
        title: `Select the Quantity of ${item} you want`,
        imageUrl: img_,
        input: 'range',
        inputLabel: 'Quantity:',
        inputAttributes: {
            min: 1,
            max: 15,
            step: 1
        },
        inputValue: 1
    })

    const inputOptions_ = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                'card1': 'Cash On Delivery',
                'card2': 'Credit Card',
                'card3': 'Easy Paisa'
            })
        }, 1000)
    })
    const { value: card } = await Swal.fire({
        titleText: `You Ordered: ${quantity} ${item}`,
        imageUrl: img_,
        text: `Your Bill is: ${quantity * price}.Rs`,
        input: 'radio',
        inputOptions: inputOptions_,
        inputValidator: (value) => {
            if (!value) {
                return 'Sir, You need to choose something!'
            }
        }
    })

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 6000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Order Place Successfully',
        text: 'Please wait while we prepare your Order'
    })

})()