function loadSelectionOfMask() {
   const workingProfile_get_init = workingProfile_get("Gray");
   const docProfile = doc.colorProfileName;

   gamma_L = [
      "eciRGB v2",
      "eciRGB v2 ICCv4"
   ]

   gamma_18 = [
      "sRGB IEC61966-2.1",
      "ProPhoto RGB",
      "Display P3",
      "image P3",
      "Apple RGB",
      "ColorMatch RGB"

   ]

   gamma_22 = [
      "Adobe RGB (1998)",
      "BestRGB",
      "Beta RGB",
      "DonRGB4.icm",
      "MaxRGB",
      "Russell RGB"

   ]



   if (array_contains(gamma_18, docProfile)) {
      if (workingProfile_get_init != "Gray Gamma 1.8") {
         workingProfile_set("Gray", "Gray Gamma 1.8");
      }
   }

   if (array_contains(gamma_22, docProfile)) {
      if (workingProfile_get_init != "Gray Gamma 2.2") {
         workingProfile_set("Gray", "Gray Gamma 2.2");
      }
   }

   if (array_contains(gamma_L, docProfile)) {
      workingProfile_set("Gray", "Gray-elle-V4-labl.icc");
   }

   if (!array_contains(gamma_18, docProfile) && !array_contains(gamma_22, docProfile) && !array_contains(gamma_L, docProfile)) {
      alert("Vorsicht\nDie Helligkeitsverteilung könnte fehlerhaft sein.\nfehlende Info zum Gamma von '" + docProfile + "'")
   }

   selectLayerMask();

   var m_Dsc01 = new ActionDescriptor();
   var m_Ref01 = new ActionReference();
   m_Ref01.putProperty(cTID("Chnl"), cTID("fsel"));
   m_Dsc01.putReference(cTID("null"), m_Ref01);
   var m_Ref02 = new ActionReference();
   m_Ref02.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
   m_Dsc01.putReference(cTID("T   "), m_Ref02);

   try {
      executeAction(cTID("setd"), m_Dsc01, DialogModes.NO);
   } catch (e) { }

   if (workingProfile_get_init != workingProfile_get("Gray")) {
      workingProfile_set("Gray", workingProfile_get_init);
   }
}