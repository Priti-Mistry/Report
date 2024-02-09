const express=require('express')
const cors=require('cors')

const hotel=require('./routes/hotel')
const roomType=require('./routes/roomType')
const room=require('./routes/room')
const guest=require('./routes/guest')
const reservation=require('./routes/reservation')
const roomServiceOrder=require('./routes/roomServiceOrder')
const billing=require('./routes/billing')
const staff=require('./routes/staff')
const shift=require('./routes/shift')
const inventory=require('./routes/inventory')
const feedback=require('./routes/feedback')
const expenses=require('./routes/expenses')
const maintenance=require('./routes/maintenance')
const eventBooking=require('./routes/eventBooking')
const allCols=require('./routes/allCols')
const getReservationDetails=require('./routes/getReservationDetails')


const db=require('./models')

const app=express()
app.use(express.json())
app.use(cors())

const PORT=5000;

app.use('/hotel',hotel)
app.use('/roomType',roomType)
app.use('/room',room)
app.use('/guest',guest)
app.use('/reservation',reservation)
app.use('/roomServiceOrder',roomServiceOrder)
app.use('/billing',billing)
app.use('/staff',staff)
app.use('/shift',shift)
app.use('/inventory',inventory)
app.use('/feedback',feedback)
app.use('/expenses',expenses)
app.use('/maintenance',maintenance)
app.use('/eventBooking',eventBooking)
app.use('/allCols',allCols)
app.use('/getColReservation',getReservationDetails)



db.sequelize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on PORT${PORT}`)
    })
})

