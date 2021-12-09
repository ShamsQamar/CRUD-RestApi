import express from 'express'
import { createUser, deleteuser, getAllUsers, getUser, updateUser} from '../controllers/users.js';

const router = express.Router();


// becouse of middleware we used in index.js, every routes will start from /users
router.get("/", getAllUsers);


router.post("/", createUser);

router.get("/:id", getUser)

router.delete("/:id", deleteuser)

router.patch("/:id", updateUser)


export default router;