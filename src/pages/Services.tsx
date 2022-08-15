import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ClinicalTrials from '../components/ClinicalTrials'
import path from 'path'

function Services(props: {trials: any}) {

    const {trials} = props

    return (
        <div>
            <Navbar />
            <ClinicalTrials trials={trials}/>
            <Footer />
        </div>
    )
}

const fs = require('fs/promises')

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'ClinicalTrials.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    return {
        props: {
            trials: data.clinicalTrials
        }
    }
}

export default Services