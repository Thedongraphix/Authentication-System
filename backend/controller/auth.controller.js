import expresss from "express";
import {signup} from "../controller/auth.controller.js";
const router = expresss.Router();

router.get ("/signup", signup);
router.get ("/login", login);
router.get ("/logout", logout);

export default router;




  