const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=> {
    res.status(200).json({message : "this is GET Order"})
});


router.post('/', (req, res, next)=> {
    const OrderJson ={   // data will come in the "req" variable from the Postman
        productId: req.body.productId,  // here extracting the data got from body of postman
        quantity: req.body.quantity,
    }

    res.status(201).json({
        message : "This is POST Order",  // "res" variable will send data to the Frontend(postman)
        createdProduct  : OrderJson
    })
});


router.get('/:orderid', (req, res, next)=> {
    const id= req.params.orderid;
    res.status(200).json({message : "Order id received",
        id: id
    })
});

router.post('/:orderid', (req, res, next)=> {
    const id= req.params.orderid;
    res.status(200).json({message : "Order id received",
        id: id
    })
});

router.patch('/:orderid', (req, res, next)=> {
    const id= req.params.orderid;
    res.status(200).json({message : "Order id Edited",
        id: id
    })
});

router.delete('/:orderid', (req, res, next)=> {
    const id= req.params.orderid;
    res.status(200).json({message : "Order id Deleted",
        id: id
    })
});

module.exports = router;

