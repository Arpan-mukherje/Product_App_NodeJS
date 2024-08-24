const express = require('express');
const router = express.Router();
router.get('/', (req, res, next)=> {
    res.status(200).json({message : "this is GET product"})
});


router.post('/', (req, res, next)=> {
    const ProductJson ={   // data will come in the "req" variable from the Postman
        name: req.body.name,  // here extracting the data got from body of postman
        price: req.body.price,
    }

    res.status(201).json({
        message : "This is POST product",  // "res" variable will send data to the Frontend(postman)
        createdProduct  : ProductJson
    })
});


router.get('/:productId', (req, res, next)=> {
    const id= req.params.productId;
    res.status(200).json({message : "Product id received",
        id: id
    })
});

router.post('/:productId', (req, res, next)=> {
    const id= req.params.productId;
    res.status(201).json({message : "Product id received",
        id: id
    })
});

router.patch('/:productId', (req, res, next)=> {
    const id= req.params.productId;
    res.status(200).json({message : "Product id Edited",
        id: id
    })
});

router.delete('/:productId', (req, res, next)=> {
    const id= req.params.productId;
    res.status(200).json({message : "Product id Deleted",
        id: id
    })
});

module.exports = router;

