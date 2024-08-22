const express = require('express');
const router = express.Router();


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

