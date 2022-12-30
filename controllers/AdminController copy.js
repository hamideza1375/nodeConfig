const { CreateAddminModel } = require('../model/FoodModel');
const { } = require('../validator/AdminSchema');
// var fs = require('fs');
// const sharp = require("sharp");
// const shortId = require("shortid");
// const appRoot = require("app-root-path");
// const ZarinpalCheckout = require('zarinpal-checkout');
// const zarinpal = ZarinpalCheckout.create('00000000-0000-0000-0000-000000000000', true);

function AdminController() {
  // await courseSchema.validate(req.body, { abortEarly: false })
  // const image = req.files ? req.files.videoUrl : {};
  // const fileName = `${shortId.generate()}_${image.name}`;
  // fs.writeFileSync(`${appRoot}/public/upload/image/${fileName2}`, image.data);
  // await sharp(image.data).toFile(`${appRoot}/public/upload/food/${fileName}`)
  // .jpeg({ quality: 80 })
      // .resize({width: 150,height: 150})
      // .extract({ width: 500, height: 330, left: 120, top: 70  })
      // .extract({ width: 500, height: 330, left: 120, top: 70  })
      // .toFormat("jpeg", { mozjpeg: true })
  // if (fs.existsSync(`${appRoot}/public/upload/food/${food.imageUrl}`))
  // fs.unlinkSync(`${appRoot}/public/upload/food/${food.imageUrl}`)
  // await FoodModel.findByIdAndRemove(req.params.id)

  
//   this.confirmPayment = async (req, res) => {
//     let foods = req.body.foods
//     if (!req.user) return res.status(400).send('err')
//     if (!req.body.floor) return res.status(385).send('err')
//     if (!req.body.plaque) return res.status(385).send('err')
//     const response = await zarinpal.PaymentRequest({
//       Amount: req.query.allprice,
//       CallbackURL: 'http://192.168.234.240:4000/verifyPayment',
//       Description: 'زستوران',
//       Email: req.user.payload.email,
//     });
//     await new PaymentModel({
//       user: req.user.payload.userId,
//       fullname: req.user.payload.fullname,
//       phone: req.user.payload.phone,
//       title: foods[0],
//       origin: JSON.parse(req.body.origin),
//       floor: req.body.floor,
//       plaque: req.body.plaque,
//       formattedAddress: req.body.formattedAddress,
//       streetName: req.body.streetName,
//       price: req.query.allprice,
//       foodTitle:req.body.allFoodTitle,
//       paymentCode: response.authority,
//       description: req.body.description,
//       enablePayment:1,
//       createdAt: new Date(),
//     }).save();

//     if(req.user?.payload?.userId){
//     const user = await UserModel.findById({ _id: req.user.payload.userId })
//     for (let food of foods) {
//       if(user?.CommentPermission){
//       let uc = user.CommentPermission.find((uc) => uc == food)
//       if (!uc) { user.CommentPermission = user.CommentPermission.concat(food) }
//      }
//     }; 
//     if(user?.CommentPermission) await user.save()
// }
//     res.status(200).json(response.url);
// }


// this.verifyPayment = async (req, res) => {
//     const paymentCode = req.query.Authority;
//     const status = req.query.Status;
//     const payment = await PaymentModel.findOne({ paymentCode });
//     if (!payment) return res.status(400).send('err')
//     const response = await zarinpal.PaymentVerification({
//       Amount: payment.price, Authority: paymentCode
//     });
//     if (status === "OK") {
//       payment.refId = response.RefID;
//       payment.success = true;
//       await payment.save();
//       const allAddress = await AddressModel.find();
//       await new AddressModel({
//         user: payment.user,
//         fullname: payment.fullname,
//         phone: payment.phone,
//         floor: payment.floor,
//         plaque: payment.plaque,
//         origin: payment.origin,
//         price: payment.price,
//         foodTitle:payment.foodTitle,
//         createdAt: new Date(),
//         id: allAddress.length ? allAddress[allAddress.length - 1].id + 1 : 1,
//         formattedAddress: payment.formattedAddress,
//         streetName: payment.streetName,
//         description:payment.description,
//         enablePayment:payment.enablePayment
//       }).save()
//       // open(`http://localhost:3000/VerifyPayment?qualification=ok&&fullname=${payment.fullname}&&price=${payment.price}&&phone=${payment.phone}&&refId=${response.RefID}&&floor=${payment.floor}&&plaque=${payment.plaque}&&formattedAddress=${payment.formattedAddress}&&createdAt=${JSON.stringify(new Date)}`)
//       // res.redirect(`http://localhost:3000/VerifyPayment?qualification=ok&&fullname=${payment.fullname}&&price=${payment.price}&&phone=${payment.phone}&&refId=${response.RefID}&&floor=${payment.floor}&&plaque=${payment.plaque}&&formattedAddress=${payment.formattedAddress}&&createdAt=${JSON.stringify(new Date)}`)

//       res.render("./paymant", {
//         pageTitle: "پرداخت",
//         qualification: 'ok',
//         fullname: payment.fullname,
//         price: payment.price,
//         phone: payment.phone,
//         refId: response.RefID,
//         floor: payment.floor,
//         plaque: payment.plaque,
//         formattedAddress: payment.formattedAddress,
//         foodTitle:payment.foodTitle,
//         createdAt: JSON.stringify(new Date),
//       })

//     } else {
//       res.status(500).render("./paymant", {
//         pageTitle: "پرداخت",
//         qualification: 'error',
//       })
//       // res.status(500).redirect(`http://localhost:3000/VerifyPayment?qualification=error`)
//     }
// }

// for (let i in food) {
//   if (food[i])
//     for (let n in food[i].childFood) {
//       if (food[i].childFood[n]?.comment.length) {
//         for (let y in food[i].childFood[n].comment) {
//           if (food[i].childFood[n].comment[y].starId == req.user.payload.userId) {
//             food[i].childFood[n].comment[y].imageUrl = uri
//             await FoodModel.updateMany(
//               { _id: food[i]._id },
//               { childFood: food[i].childFood }
//             )
//           }
//         }
//       }
//     }
// }



}

module.exports = new AdminController();