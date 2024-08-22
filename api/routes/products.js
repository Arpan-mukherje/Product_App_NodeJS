const express = require('express');
const router = express.Router();
router.get('/', (req, res, next)=> {
    res.status(200).json({message : "this is GET product"})
});

router.post('/', (req, res, next)=> {
    res.status(200).json({message : "this is POST product"})
});

router.get('/:productId', (req, res, next)=> {
    const id= req.params.productId;
    res.status(200).json({message : "Product id received",
        id: id
    })
});

router.post('/:productId', (req, res, next)=> {
    const id= req.params.productId;
    res.status(200).json({message : "Product id received",
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

