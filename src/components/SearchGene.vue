<template>
  <div class="container">
    <el-select v-model="queryTerm.term" class="m-2" placeholder="Select" size="large">
        <el-option value="4625" selected>MYH7</el-option>
        <el-option value="4607" selected>MYBPC3</el-option>
        <el-option value="7139" selected>TNNT2</el-option>
        <el-option value="70" selected>ACTC1</el-option>
        <el-option value="7168" selected>TPM1</el-option>
        <el-option value="7134" selected>TNNC1</el-option>
        <el-option value="7137" selected>TNNI3</el-option>
        <el-option value="4633" selected>MYL2</el-option>
        <el-option value="7273" selected>TTN</el-option>
    </el-select>
    <el-button type="primary" @click="getApi()">
      {{ loading ? "Loading..." : "Learn something new" }}
    </el-button>

    <div v-if="axios_response">
    <el-row>
      <div class="center">
            <h2>Gene Overview</h2>
        </div>
        <table>
            <tr>
                <th style="width:40%">Name</th>
                <th>Mutation Description</th>
            </tr>
            <tr>
                <td>{{ gene.name}}</td>
                 <td>{{ gene.def}}</td>
            </tr>
        </table>
        <div class="center">
            <h2>Associated Diseases</h2>
        </div>
        <table id="assocData">
            <tr>
                <th style="width:40%">ID</th>
                <th>Name</th>
            </tr>
             <tr v-for="index in axios_response.diseaseAssoc" :key="index">
                <td v-for="obj in index" :key="obj">{{obj}}</td>
            </tr>
        </table>
        <div class="center">
        <h2>Associated Terms</h2>
        </div>
        <table id="termData">
            <th style="width:40%">Name</th>
            <th>Description</th>
         <tr v-for="index in axios_response.termAssoc" :key="index">
              <td v-for="obj in index" :key="obj">{{obj}}</td>
          </tr>
        </table>
    </el-row>
 
    </div>
  </div>
</template>

<script>
import { ref, computed, reactive } from "vue";
import axios from 'axios';

export default {
  setup() {

    const queryTerm = reactive({
      term: '',
    
    })

    const gene = reactive({
      name: '',
      def: ''
    
    })


    

    let loading = ref(false);
    let axios_response = ref('');

    let quote = computed( () => {
      return axios_response.value && axios_response.value.slip
        ? axios_response.value.slip.advice
        : null
    }); 
    function getApi() {
      console.log(queryTerm.term);

      if(queryTerm.term == "4607"){
        gene.name = "MYBPC3"
        gene.def = "MYBPC3 encodes the cardiac isoform of myosin-binding protein C. Myosin-binding protein C is a myosin-associated protein found in the cross-bridge-bearing zone (C region) of A bands in striated muscle. MYBPC3, the cardiac isoform, is expressed exclussively in heart muscle. Regulatory phosphorylation of the cardiac isoform in vivo by cAMP-dependent protein kinase (PKA) upon adrenergic stimulation may be linked to modulation of cardiac contraction. Mutations in MYBPC3 are one cause of familial hypertrophic cardiomyopathy."
        }

    if(queryTerm.term == "4625"){
        gene.name = "MYH7"
        gene.def = "Muscle myosin is a hexameric protein containing 2 heavy chain subunits, 2 alkali light chain subunits, and 2 regulatory light chain subunits. This gene encodes the beta (or slow) heavy chain subunit of cardiac myosin. It is expressed predominantly in normal human ventricle. It is also expressed in skeletal muscle tissues rich in slow-twitch type I muscle fibers. Changes in the relative abundance of this protein and the alpha (or fast) heavy subunit of cardiac myosin correlate with the contractile velocity of cardiac muscle. Its expression is also altered during thyroid hormone depletion and hemodynamic overloading. Mutations in this gene are associated with familial hypertrophic cardiomyopathy, myosin storage myopathy, dilated cardiomyopathy, and Laing early-onset distal myopathy."
        }

    if(queryTerm.term == "7139"){
        gene.name = "TNNT2"
        gene.def = "The protein encoded by this gene is the tropomyosin-binding subunit of the troponin complex, which is located on the thin filament of striated muscles and regulates muscle contraction in response to alterations in intracellular calcium ion concentration. Mutations in this gene have been associated with familial hypertrophic cardiomyopathy as well as with dilated cardiomyopathy. Transcripts for this gene undergo alternative splicing that results in many tissue-specific isoforms, however, the full-length nature of some of these variants has not yet been determined."
        }
    
    if(queryTerm.term == "70"){
        gene.name = "ACTC1"
        gene.def = "Actins are highly conserved proteins that are involved in various types of cell motility. Polymerization of globular actin (G-actin) leads to a structural filament (F-actin) in the form of a two-stranded helix. Each actin can bind to four others. The protein encoded by this gene belongs to the actin family which is comprised of three main groups of actin isoforms, alpha, beta, and gamma. The alpha actins are found in muscle tissues and are a major constituent of the contractile apparatus. Defects in this gene have been associated with idiopathic dilated cardiomyopathy (IDC) and familial hypertrophic cardiomyopathy (FHC)."
        }

     if(queryTerm.term == "7168"){
        gene.name = "TPM1"
        gene.def = "This gene is a member of the tropomyosin family of highly conserved, widely distributed actin-binding proteins involved in the contractile system of striated and smooth muscles and the cytoskeleton of non-muscle cells. Tropomyosin is composed of two alpha-helical chains arranged as a coiled-coil. It is polymerized end to end along the two grooves of actin filaments and provides stability to the filaments. The encoded protein is one type of alpha helical chain that forms the predominant tropomyosin of striated muscle, where it also functions in association with the troponin complex to regulate the calcium-dependent interaction of actin and myosin during muscle contraction. In smooth muscle and non-muscle cells, alternatively spliced transcript variants encoding a range of isoforms have been described. Mutations in this gene are associated with type 3 familial hypertrophic cardiomyopathy."
        }

    if(queryTerm.term == "7134"){
        gene.name = "TNNC1"
        gene.def = "Troponin is a central regulatory protein of striated muscle contraction, and together with tropomyosin, is located on the actin filament. Troponin consists of 3 subunits: TnI, which is the inhibitor of actomyosin ATPase; TnT, which contains the binding site for tropomyosin; and TnC, the protein encoded by this gene. The binding of calcium to TnC abolishes the inhibitory action of TnI, thus allowing the interaction of actin with myosin, the hydrolysis of ATP, and the generation of tension. Mutations in this gene are associated with cardiomyopathy dilated type 1Z."
        }    

    if(queryTerm.term == "7137"){
        gene.name = "TNNI3"
        gene.def = "Troponin I (TnI), along with troponin T (TnT) and troponin C (TnC), is one of 3 subunits that form the troponin complex of the thin filaments of striated muscle. TnI is the inhibitory subunit; blocking actin-myosin interactions and thereby mediating striated muscle relaxation. The TnI subfamily contains three genes: TnI-skeletal-fast-twitch, TnI-skeletal-slow-twitch, and TnI-cardiac. This gene encodes the TnI-cardiac protein and is exclusively expressed in cardiac muscle tissues. Mutations in this gene cause familial hypertrophic cardiomyopathy type 7 (CMH7) and familial restrictive cardiomyopathy (RCM). Troponin I is useful in making a diagnosis of heart failure, and of ischemic heart disease. An elevated level of troponin is also now used as indicator of acute myocardial injury in patients hospitalized with moderate/severe Coronavirus Disease 2019 (COVID-19). Such elevation has also been associated with higher risk of mortality in cardiovascular disease patients hospitalized due to COVID-19. "
        }

    if(queryTerm.term == "4633"){
        gene.name = "MYL2"
        gene.def = "Thus gene encodes the regulatory light chain associated with cardiac myosin beta (or slow) heavy chain. Ca+ triggers the phosphorylation of regulatory light chain that in turn triggers contraction. Mutations in this gene are associated with mid-left ventricular chamber type hypertrophic cardiomyopathy."
        }

     if(queryTerm.term == "7273"){
        gene.name = "TTN"
        gene.def = "This gene encodes a large abundant protein of striated muscle. The product of this gene is divided into two regions, a N-terminal I-band and a C-terminal A-band. The I-band, which is the elastic part of the molecule, contains two regions of tandem immunoglobulin domains on either side of a PEVK region that is rich in proline, glutamate, valine and lysine. The A-band, which is thought to act as a protein-ruler, contains a mixture of immunoglobulin and fibronectin repeats, and possesses kinase activity. An N-terminal Z-disc region and a C-terminal M-line region bind to the Z-line and M-line of the sarcomere, respectively, so that a single titin molecule spans half the length of a sarcomere. Titin also contains binding sites for muscle associated proteins so it serves as an adhesion template for the assembly of contractile machinery in muscle cells. It has also been identified as a structural protein for chromosomes. Alternative splicing of this gene results in multiple transcript variants. Considerable variability exists in the I-band, the M-line and the Z-disc regions of titin. Variability in the I-band region contributes to the differences in elasticity of different titin isoforms and, therefore, to the differences in elasticity of different muscle types. Mutations in this gene are associated with familial hypertrophic cardiomyopathy 9, and autoantibodies to titin are produced in patients with the autoimmune disease scleroderma."
        }

    const url = "https://hpo.jax.org/api/hpo/gene/" + queryTerm.term;
      console.log(url);

      loading.value = true
      return axios.get(url).then(response => {
        axios_response.value = response.data
        console.log(axios_response.value)
        setTimeout(() => {
          loading.value = false
        }, 4000);
      })
    }
  
    return { loading, quote, getApi, axios_response ,queryTerm, gene}
  }
};
</script>

<style>
  .el-button {
    margin: 5px;
  } 
table#termData td:nth-child(1) {
   display: none;
}
table#assocData td:nth-child(3) {
   display: none;
}
table#assocData td:nth-child(4) {
   display: none;
}

.center{
    margin:0 5%;
}

</style>
