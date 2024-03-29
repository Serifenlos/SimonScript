# Photoshop Constants Rosetta Stone

## PSConstants -> value -> CharID -> TypeIDToStringID

*Thanks to [John Deurbrouck/pcpix.com](https://web.archive.org/web/20160305032104/http://www.pcpix.com/Photoshop/char.htm)*

Blank CharID and TypeIDToStringID entries indicate that for the specified values, TypeIDToCharID() and TypeIDToStringID() respectively did not return a string. Blanks in the value column indicate the same value, and CharID and TypeIDToStringID, as the line above.

```{.json .table_charid} 
                             PSConstants ->      value -> CharID  TypeIDToStringID
                              ---------- ->      ----- -> ------  ----------------
                     phDialogDontDisplay ->          0 ->         
                         phDialogDisplay ->          1 ->         accelerated
                          phDialogSilent ->          2 ->         stepByStep
                   phTypeActionReference ->  591487860 -> "#Act"  actionReference
                             phUnitAngle ->  591490663 -> "#Ang"  angleUnit
                  phTypeChannelReference ->  591620178 -> "#ChR"  channelReference
                      phTypeColorChannel ->  591621187 -> "#ClC"  colorChannel
                       phTypeClassExport ->  591621221 -> "#Cle"  classExport
                      phTypeClassElement ->  591621189 -> "#ClE"  classElement
                       phTypeClassFormat ->  591621190 -> "#ClF"  classFormat
                       phTypeClassImport ->  591621193 -> "#ClI"  classImport
                         phTypeClassMode ->  591621197 -> "#ClM"  classMode
                        phTypeClassColor ->  591621234 -> "#Clr"  classColor
                 phTypeClassStringFormat ->  591621203 -> "#ClS"  classStringFormat
                   phTypeClassTextImport ->  591621204 -> "#ClT"  classTextImport
                   phTypeClassTextExport ->  591615045 -> "#CTE"  classTextExport
                 phTypeDocumentReference ->  591684434 -> "#DcR"  documentReference
                  phTypeElementReference ->  591752274 -> "#ElR"  elementReference
               phTypeClassHueSatHueSatV2 ->  591950678 -> "#HsV"  classHueSatHueSatV2
                    phTypeImageReference ->  592014674 -> "#ImR"  imageReference
                    phTypeIntegerChannel ->  594112067 -> "#inC"  integerChannel
            phTypeKelvinCustomWhitePoint ->  592145526 -> "#Klv"  kelvinCustomWhitePoint
                 phTypeLocationReference ->  592208756 -> "#Lct"  locationReference
                              phUnitNone ->  592342629 -> "#Nne"  noneUnit
          phTypePhosphorsCustomPhosphors ->  592472179 -> "#Phs"  phosphorsCustomPhosphors
                           phUnitPercent ->  592474723 -> "#Prc"  percentUnit
                     phTypePathReference ->  592475218 -> "#PtR"  pathReference
                            phUnitPixels ->  592476268 -> "#Pxl"  pixelsUnit
                          phUnitDistance ->  592604276 -> "#Rlt"  distanceUnit
                           phUnitDensity ->  592606060 -> "#Rsl"  densityUnit
                 phTypeStringClassFormat ->  592671811 -> "#StC"  stringClassFormat
                         phTypeStringFSS ->  592671846 -> "#Stf"  stringFSS
                     phTypeStringChannel ->  594769000 -> "#sth"  stringChannel
                     phTypeStringInteger ->  592671817 -> "#StI"  stringInteger
                phTypeStringCompensation ->  592671853 -> "#Stm"  stringCompensation
          phTypeTypeClassModeOrClassMode ->  592738637 -> "#TyM"  typeClassModeOrClassMode
                  phEnumBitDepthA1R5G5B5 ->  825570869 -> "1565"  
                    phEnum16BitsPerPixel ->  825639540 -> "16Bt"  16BitsPerPixel
                     phEnum2BitsPerPixel ->  843215987 -> "2Bts"  2BitsPerPixel
                    phEnum32BitsPerPixel ->  858931828 -> "32Bt"  32BitsPerPixel
                  phEnumBitDepthA4R4G4B4 ->  875836468 -> "4444"  
                     phEnum4BitsPerPixel ->  876770419 -> "4Bts"  4BitsPerPixel
                              phEnum5000 ->  892350512 -> "5000"  5000
                              phEnum5500 ->  892678192 -> "5500"  5500
                              phEnum6500 ->  909455408 -> "6500"  6500
                           phEnum72Color ->  926040940 -> "72Cl"  72Color
                      phEnumMulti72Color ->  926040909 -> "72CM"  multi72Color
                     phEnumSingle72Color ->  926040915 -> "72CS"  single72Color
                       phEnumMulti72Gray ->  926041933 -> "72GM"  multi72Gray
                            phEnum72Gray ->  926041970 -> "72Gr"  72Gray
                      phEnumSingle72Gray ->  926041939 -> "72GS"  single72Gray
                              phEnum7500 ->  926232624 -> "7500"  7500
                              phEnum9300 ->  959655984 -> "9300"  9300
                                 phEnumA -> 1092624416 -> "A   "  a
                                  phKeyA
                          phEnumAboutApp -> 1096958320 -> "AbAp"  aboutApp
                          phEnumAbsolute -> 1096971116 -> "Absl"  absolute
                     phClassAirbrushTool -> 1096963180 -> "AbTl"  airbrushTool
              phClassArtHistoryBrushTool -> 1094866028 -> "ABTl"  artBrushTool
                    phEventAccentedEdges -> 1097032517 -> "AccE"  accentedEdges
              phClassAlphaChannelOptions -> 1094936684 -> "AChl"  alphaChannelOptionsClass
                phKeyAlphaChannelOptions -> 1094936686 -> "AChn"  alphaChannelOptions
                   phEnumAbsColorimetric -> 1094937714 -> "AClr"  absColorimetric
                 phKeyUseAccurateScreens -> 1097036371 -> "AcrS"  useAccurateScreens
                        phTypeActionData -> 1097036868 -> "ActD"  actionData
                           phClassAction -> 1097036910 -> "Actn"  action
                      phEnumActualPixels -> 1097036880 -> "ActP"  actualPixels
                        phEnumADSBottoms -> 1097089652 -> "AdBt"  ADSBottoms
                       phEnumADSCentersH -> 1097089864 -> "AdCH"  ADSCentersH
                       phEnumADSCentersV -> 1097089878 -> "AdCV"  ADSCentersV
                               phEnumAdd -> 1097098272 -> "Add "  add
                              phEventAdd
                            phEventAddTo -> 1097098324 -> "AddT"  addTo
                     phEnumADSHorizontal -> 1097091186 -> "AdHr"  ADSHorizontal
                  phClassAdjustmentLayer -> 1097099852 -> "AdjL"  adjustmentLayer
                 phEnumAdjustmentOptions -> 1097099855 -> "AdjO"  adjustmentOptions
                       phClassAdjustment -> 1097099891 -> "Adjs"  adjustment
                         phKeyAdjustment
                          phEnumADSLefts -> 1097092198 -> "AdLf"  ADSLefts
                         phEventAddNoise -> 1097092723 -> "AdNs"  addNoise
               phKeyUseAdditionalPlugins -> 1097093228 -> "AdPl"  useAdditionalPlugins
                          phEnumAdaptive -> 1097101428 -> "Adpt"  adaptive
                         phEnumADSRights -> 1097093735 -> "AdRg"  ADSRights
           phTypeAlignDistributeSelector -> 1094996852 -> "ADSt"  alignDistributeSelector
                           phEnumADSTops -> 1097094256 -> "AdTp"  ADSTops
                       phEnumADSVertical -> 1097094770 -> "AdVr"  ADSVertical
                               phEnumAll -> 1097605152 -> "Al  "  allEnum
                         phTypeAlignment -> 1097623328 -> "Alg "  alignmentType
                            phKeyAligned -> 1097623396 -> "Algd"  aligned
                            phEventAlign -> 1097623406 -> "Algn"  align
                          phKeyAlignment
                             phTypeAlias -> 1634494835 -> "alis"  alias
                        phKey3DAntiAlias -> 1097623923 -> "Alis"  3DAntiAlias
                              phEventAll -> 1097624608 -> "All "  all
                              phKeyAllPS
                          phKeyAllExcept -> 1097624645 -> "AllE"  allExcept
                      phKeyAlphaChannels -> 1097625667 -> "AlpC"  alphaChannels
                     phKeyAllToolOptions -> 1097618540 -> "AlTl"  allToolOptions
                  phKeyAmbientBrightness -> 1097687618 -> "AmbB"  ambientBrightness
                       phKeyAmbientColor -> 1097687619 -> "AmbC"  ambientColor
                             phEnumAmiga -> 1097688929 -> "Amga"  
                        phEnumAmountHigh -> 1634551913 -> "amHi"  amountHigh
                         phEnumAmountLow -> 1634552943 -> "amLo"  amountLow
                      phEnumAmountMedium -> 1634553188 -> "amMd"  amountMedium
                       phKeyAmplitudeMin -> 1097682286 -> "AmMn"  amplitudeMin
                       phKeyAmplitudeMax -> 1097682296 -> "AmMx"  amplitudeMax
                             phKeyAmount -> 1097690740 -> "Amnt"  amount
                            phTypeAmount
                             phKeyAnchor -> 1097753448 -> "Anch"  anchor
                    phEnumAntiAliasCrisp -> 1097745266 -> "AnCr"  antiAliasCrisp
                             phKeyAngle1 -> 1097754417 -> "Ang1"  angle1
                             phKeyAngle2 -> 1097754418 -> "Ang2"  angle2
                             phKeyAngle3 -> 1097754419 -> "Ang3"  angle3
                             phKeyAngle4 -> 1097754420 -> "Ang4"  angle4
                             phEnumAngle -> 1097754476 -> "Angl"  angle
                              phKeyAngle
                    phEventAngledStrokes -> 1097754451 -> "AngS"  angledStrokes
                     phEnumAntiAliasHigh -> 1097746537 -> "AnHi"  antiAliasHigh
                      phEnumAntiAliasLow -> 1097747567 -> "AnLo"  antiAliasLow
                   phEnumAntiAliasMedium -> 1097747812 -> "AnMd"  antiAliasMedium
                     phEnumAntiAliasNone -> 1097756271 -> "Anno"  antiAliasNone
                         phTypeAntiAlias -> 1097756276 -> "Annt"  antiAliasType
                   phEnumAntiAliasSmooth -> 1097749357 -> "AnSm"  antiAliasSmooth
                   phEnumAntiAliasStrong -> 1097749364 -> "AnSt"  antiAliasStrong
           phClassAntiAliasedPICTAcquire -> 1097757761 -> "AntA"  antiAlias
                          phKeyAntiAlias
                               phEnumAny -> 1097759008 -> "Any "  any
                        phEnumApplyImage -> 1097886793 -> "AplI"  applyImageEnum
                              phKeyApply -> 1097886841 -> "Aply"  apply
                             phKeyAppend -> 1097887845 -> "Appe"  append
                       phEventApplyImage -> 1097887817 -> "AppI"  applyImageEvent
                          phEnumAppleRGB -> 1097887826 -> "AppR"  appleRGB
                               phKeyArea -> 1097998368 -> "Ar  "  area
                    phEnumAirbrushEraser -> 1098015347 -> "Arbs"  airbrushEraser
                      phEnumAroundCenter -> 1098018371 -> "ArnC"  aroundCenter
                           phEnumArrange -> 1098018407 -> "Arng"  arrange
                          phKeyArrowhead -> 1098019447 -> "Arrw"  
                      phTypeAreaSelector -> 1098011500 -> "ArSl"  areaSelector
                                 phKeyAs -> 1098063904 -> "As  "  as
                             phEnumASCII -> 1095975753 -> "ASCI"  ASCII
                        phClassActionSet -> 1095984500 -> "ASet"  actionSet
                               phEnumAsk -> 1098083104 -> "Ask "  ask
                    phEnumAskWhenOpening -> 1098083159 -> "AskW"  askWhenOpening
                           phClassAssert -> 1098084980 -> "Asrt"  assert
                           phEventAssert
                        phKeyAssumedCMYK -> 1098085187 -> "AssC"  assumedCMYK
                        phKeyAssumedGray -> 1098085191 -> "AssG"  assumedGray
                     phTypeAssumeOptions -> 1098085199 -> "AssO"  assumeOptions
                   phClassAssumedProfile -> 1098085200 -> "AssP"  assumedProfile
                         phKeyAssumedRGB -> 1098085202 -> "AssR"  assumedRGB
                       phEventApplyStyle -> 1095988345 -> "ASty"  applyStyle
                                 phKeyAt -> 1098129440 -> "At  "  at
                           phKeyAutoKern -> 1098140530 -> "AtKr"  autoKern
                          phKeyAutoErase -> 1098150515 -> "Atrs"  autoErase
                         phKeyAutoUpdate -> 1098143088 -> "AtUp"  autoUpdateFiles
                       phKeyAutoContrast -> 1098204015 -> "AuCo"  autoContrast
                               phKeyAuto -> 1098216559 -> "Auto"  auto
                               phKeyAxis -> 1098410355 -> "Axis"  axis
                                 phEnumB -> 1109401632 -> "B   "  b
                                  phKeyB
                              phEnumBack -> 1113678699 -> "Back"  back
                        phEventBackLight -> 1113678668 -> "BacL"  
                        phClassBackLight -> 1113680716 -> "BakL"  
                     phEnumBlackAndWhite -> 1113681495 -> "BanW"  blackAndWhite
                           phEnumBicubic -> 1113809507 -> "Bcbc"  bicubic
                   phEnumBackgroundColor -> 1113811779 -> "BckC"  backgroundColor
                    phKeyBackgroundColor
                        phEnumBackground -> 1113811815 -> "Bckg"  background
                         phKeyBackground
                  phClassBackgroundLayer -> 1113811788 -> "BckL"  backgroundLayer
                    phKeyBackgroundLevel
                          phEnumBackward -> 1113811831 -> "Bckw"  backwardEnum
                         phEnumBitDepth1 -> 1111765280 -> "BD1 "  bitDepth1
                        phEnumBitDepth16 -> 1111765302 -> "BD16"  
                        phEnumBitDepth24 -> 1111765556 -> "BD24"  bitDepth24
                        phEnumBitDepth32 -> 1111765810 -> "BD32"  
                         phEnumBitDepth4 -> 1111766048 -> "BD4 "  bitDepth4
                         phEnumBitDepth8 -> 1111767072 -> "BD8 "  bitDepth8
                  phTypeBevelEmbossStyle -> 1111839596 -> "BESl"  bevelEmbossStyle
             phTypeBevelEmbossStampStyle -> 1111839603 -> "BESs"  bevelEmbossStampStyle
                    phTypeMatteTechnique -> 1111839813 -> "BETE"  matteTechnique
                          phKeyBigNudgeH -> 1114066504 -> "BgNH"  bigNudgeH
                          phKeyBeginRamp -> 1114074706 -> "BgnR"  beginRamp
                       phKeyBeginSustain -> 1114074707 -> "BgnS"  beginSustain
                          phKeyBigNudgeV -> 1114066518 -> "BgNV"  bigNudgeV
                            phEnumBehind -> 1114140260 -> "Bhnd"  behind
                               phKeyBook -> 1114316832 -> "Bk  "  book
                        phClassBookColor -> 1114325868 -> "BkCl"  bookColor
                              phEnumBlue -> 1114382368 -> "Bl  "  blue
                               phKeyBlue
                     phKeyBlueBlackPoint -> 1114391148 -> "BlBl"  blueBlackPoint
                         phEnumBlackBody -> 1114399554 -> "BlcB"  blackBody
                          phKeyBlackClip -> 1114399555 -> "BlcC"  blackClip
               phKeyBlackGenerationCurve -> 1114399559 -> "BlcG"  blackGenerationType
                   phTypeBlackGeneration
                     phKeyBlackIntensity -> 1114399561 -> "BlcI"  blackIntensity
                             phEnumBlack -> 1114399595 -> "Blck"  black
                              phKeyBlack
                         phKeyBlackLevel -> 1114399564 -> "BlcL"  blackLevel
                         phKeyBlackLimit
                    phKeyBlackGeneration -> 1114399598 -> "Blcn"  blackGeneration
                              phKeyBleed -> 1114399776 -> "Bld "  bleed
            phKeyCreateLayersFromLayerFX -> 1651271276 -> "blfl"  createLayersFromLayerFX
                          phKeyBlueGamma -> 1114392429 -> "BlGm"  blueGamma
                       phEnumBlockEraser -> 1114401568 -> "Blk "  blockEraser
                            phEnumBlacks -> 1114401651 -> "Blks"  blacks
                            phEnumBlocks
                            phKeyBalance -> 1114402403 -> "Blnc"  balance
                       phClassBlendRange -> 1114402404 -> "Blnd"  blendRange
                         phKeyBlendRange
                         phTypeBlendMode -> 1114402381 -> "BlnM"  blendMode
                          phEnumBilinear -> 1114402418 -> "Blnr"  bilinear
                             phEventBlur -> 1114403360 -> "Blr "  blurEvent
                         phEventBlurMore -> 1114403405 -> "BlrM"  blurMethod
                         phKeyBlurMethod
                        phTypeBlurMethod
                        phKeyBlurQuality -> 1114403409 -> "BlrQ"  blurQuality
                       phTypeBlurQuality
                             phEnumBlues -> 1114403616 -> "Bls "  blues
                             phEnumBlast -> 1114403700 -> "Blst"  blast
                    phTypeBuiltInContour -> 1114403907 -> "BltC"  builtInShapeCurve
                         phClassBlurTool -> 1114395756 -> "BlTl"  blurTool
                           phEnumBuiltin -> 1114403950 -> "Bltn"  builtin
                    phTypeBuiltinProfile -> 1114403920 -> "BltP"  builtinProfile
                               phKeyBlur -> 1651275122 -> "blur"  blur
                     phKeyBlueWhitePoint -> 1114396520 -> "BlWh"  blueWhitePoint
                              phKeyBlueX -> 1114396704 -> "BlX "  blueX
                              phKeyBlueY -> 1114396960 -> "BlY "  blueY
                      phKeyBumpAmplitude -> 1114468417 -> "BmpA"  bumpAmplitude
                        phKeyBumpChannel -> 1114468419 -> "BmpC"  bumpChannel
                        phClassBMPFormat -> 1112363078 -> "BMPF"  bMPFormat
                            phEnumBinary -> 1114534521 -> "Bnry"  binary
                           phTypeBoolean -> 1651470188 -> "bool"  boolean
                       phKeyBeepWhenDone -> 1114658664 -> "BpWh"  beepWhenDone
                   phEnumBrushWideBlurry -> 1114792535 -> "BrbW"  brushWideBlurry
                           phEventBorder -> 1114793074 -> "Brdr"  border
                    phEnumBrushDarkRough -> 1114784850 -> "BrDR"  brushDarkRough
                    phKeyBorderThickness -> 1114793044 -> "BrdT"  borderThickness
               phClassBrightnessContrast -> 1114793795 -> "BrgC"  brightnessEvent
                       phEventBrightness
                         phKeyBrightness -> 1114793832 -> "Brgh"  brightness
                           phEnumBurnInH -> 1114795592 -> "BrnH"  burnInH
                           phEnumBurnInM -> 1114795597 -> "BrnM"  burnInM
                           phEnumBurnInS -> 1114795603 -> "BrnS"  burnInS
                     phEnumBrushesAppend -> 1114796865 -> "BrsA"  brushesAppend
                       phEnumBrushesLoad -> 1114796900 -> "Brsd"  brushesLoad
                     phEnumBrushesDefine -> 1114796868 -> "BrsD"  brushDetail
                        phKeyBrushDetail
                     phEnumBrushesDelete -> 1114796902 -> "Brsf"  brushesDelete
                            phClassBrush -> 1114796904 -> "Brsh"  brush
                            phKeyBrushes
                   phEnumBrushLightRough -> 1114796876 -> "BrsL"  brushLightRough
                       phEnumBrushSimple -> 1114788717 -> "BrSm"  brushSimple
                        phEnumBrushesNew -> 1114796878 -> "BrsN"  brushesNew
                    phEnumBrushesOptions -> 1114796879 -> "BrsO"  brushesOptions
                      phEnumBrushSparkle -> 1114788720 -> "BrSp"  brushSparkle
                      phEnumBrushesReset -> 1114796882 -> "BrsR"  brushesReset
                         phEnumBrushSize -> 1114796883 -> "BrsS"  brushSize
                          phKeyBrushSize
                          phKeyBrushType -> 1114796884 -> "BrsT"  brushType
                         phTypeBrushType
                       phEnumBrushesSave -> 1114796918 -> "Brsv"  brushesSave
                    phEnumBrushWideSharp -> 1114796887 -> "BrsW"  brushWideSharp
                       phClassBurnInTool -> 1114788972 -> "BrTl"  burnInTool
                      phKeyBaselineShift -> 1114860654 -> "Bsln"  baselineShift
                        phEventBasRelief -> 1114853996 -> "BsRl"  basRelief
                              phEnumBest -> 1114862624 -> "Bst "  best
                 phEventBatchFromDroplet -> 1114923846 -> "BtcF"  batchFromDroplet
                            phEventBatch -> 1114923880 -> "Btch"  batch
                           phKeyBitDepth -> 1114915952 -> "BtDp"  bitDepth
                          phTypeBitDepth
                       phClassBitmapMode -> 1114926413 -> "BtmM"  bitmapMode
                            phEnumBitmap -> 1114926448 -> "Btmp"  bitmap
                        phEnumButtonMode -> 1114926669 -> "BtnM"  buttonMode
                             phKeyBottom -> 1114926957 -> "Btom"  bottom
                            phEnumBottom -> 1114928237 -> "Bttm"  bottomEnum
                     phKeyBevelDirection -> 1651928132 -> "bvlD"  bevelDirection
                         phKeyBevelStyle -> 1651928147 -> "bvlS"  bevelStyle
                     phKeyBevelTechnique -> 1651928148 -> "bvlT"  bevelTechnique
                           phKeyBackward -> 1115120672 -> "Bwd "  backward
                                 phKeyBy -> 1115234336 -> "By  "  by
                             phKeyByline -> 1115253870 -> "Byln"  byline
                        phKeyBylineTitle -> 1115253844 -> "BylT"  bylineTitle
                          phKeyByteOrder -> 1115255887 -> "BytO"  byteOrder
                           phKeyInherits -> 1665147742 -> "c@#^"  inherits
                             phPInherits
                      phClassApplication -> 1667330160 -> "capp"  application
                        phClassArrowhead -> 1665233527 -> "cArw"  arrowhead
                         phEnumColorBurn -> 1128428142 -> "CBrn"  colorBurn
                       phClassCachePrefs -> 1130588240 -> "CchP"  cachePrefs
                         phKeyCachePrefs
                        phEnumColorDodge -> 1128555623 -> "CDdg"  colorDodge
                    phKeyConstructionFOV -> 1130786678 -> "Cfov"  constructionFOV
                     phKeyCharcoalAmount -> 1130905965 -> "ChAm"  charcoalAmount
                  phTypeCheckerboardSize -> 1130914667 -> "Chck"  checkerboardSize
                 phEnumCheckerboardLarge -> 1130914636 -> "ChcL"  checkerboardLarge
                phEnumCheckerboardMedium -> 1130914637 -> "ChcM"  checkerboardMedium
                  phEnumCheckerboardNone -> 1130914638 -> "ChcN"  checkerboardNone
                 phEnumCheckerboardSmall -> 1130914643 -> "ChcS"  checkerboardSmall
                         phClassChromeFX -> 1130907224 -> "ChFX"  chromeFX
                           phKeyChromeFX
                          phKeyChalkArea -> 1130916929 -> "ChlA"  chalkArea
                    phEventChalkCharcoal -> 1130916931 -> "ChlC"  chalkCharcoal
                    phClassChannelMatrix -> 1130909048 -> "ChMx"  channelMatrix
                      phKeyChannelMatrix
                phKeyChannelsInterleaved -> 1130917449 -> "ChnI"  channelsInterleaved
                          phClassChannel -> 1130917484 -> "Chnl"  channel
                            phKeyChannel
                           phTypeChannel
                     phClassChannelMixer -> 1130917453 -> "ChnM"  channelMixer
                     phEventChannelMixer
                        phKeyChannelName -> 1130917454 -> "ChnN"  channelName
                    phEnumChannelOptions -> 1130917455 -> "ChnO"  channelOptions
            phEnumChannelsPaletteOptions -> 1130917456 -> "ChnP"  channelsPaletteOptions
                           phKeyChannels -> 1130917491 -> "Chns"  channels
                       phKeyCharcoalArea -> 1130918465 -> "ChrA"  charcoalArea
                         phEventCharcoal -> 1130918499 -> "Chrc"  charcoal
                           phEventChrome -> 1130918509 -> "Chrm"  chrome
                     phClassHistoryPrefs -> 1128821584 -> "CHsP"  historyPrefsClass
                               phKeyCity -> 1130984569 -> "City"  city
                         phKeyChokeMatte -> 1131113844 -> "Ckmt"  chokeMatte
                             phEnumClear -> 1131176306 -> "Clar"  clearEnum
                    phKeyCalibrationBars -> 1131176562 -> "Clbr"  calibrationBars
                      phClassCalculation -> 1131176812 -> "Clcl"  calculation
                      phEnumCalculations
                        phKeyCalculation
                       phTypeCalculation -> 1131176814 -> "Clcn"  calculationType
                           phEventClouds -> 1131177075 -> "Clds"  clouds
                            phEventClear -> 1131177330 -> "Cler"  clearEvent
                    phKeyColorManagement -> 1131171175 -> "ClMg"  colorManagement
                        phEnumColorMatch -> 1131171188 -> "ClMt"  colorMatch
                        phKeyColumnWidth -> 1131179351 -> "ClmW"  columnWidth
                        phKeyCloneSource -> 1131179603 -> "ClnS"  cloneSource
                        phEnumColorNoise -> 1131171443 -> "ClNs"  colorNoise
                         phEnumClipboard -> 1131180130 -> "Clpb"  clipboard
               phKeyClippingPathFlatness -> 1131180102 -> "ClpF"  clippingPathFlatness
                   phKeyClippingPathInfo -> 1131180135 -> "Clpg"  clippingPathInfo
                  phKeyClippingPathIndex -> 1131180105 -> "ClpI"  clippingPathIndex
                     phClassClippingInfo -> 1131180143 -> "Clpo"  clippingInfo
                     phClassClippingPath -> 1131180112 -> "ClpP"  clippingPathEPS
                      phEnumClippingPath
                    phKeyClippingPathEPS
                       phKeyClippingPath -> 1131171956 -> "ClPt"  clippingPath
                            phClassColor -> 1131180576 -> "Clr "  color
                             phEnumColor
                              phKeyColor
                             phTypeColor
                        phKeyClearAmount -> 1131180609 -> "ClrA"  clearAmount
                     phClassColorBalance -> 1131180610 -> "ClrB"  colorBalance
                     phEventColorBalance
                  phClassColorCorrection -> 1131180611 -> "ClrC"  colorCorrection
                    phKeyColorCorrection
                       phEnumClearGuides -> 1131180615 -> "ClrG"  clearGuides
                      phKeyColorChannels -> 1131180648 -> "Clrh"  colorChannels
                    phEventColorHalftone -> 1131180616 -> "ClrH"  colorHalftone
                     phKeyColorIndicates -> 1131180617 -> "ClrI"  colorIndicates
                 phClassColorPickerPrefs -> 1131180651 -> "Clrk"  colorPickerPrefsClass
                         phKeyColorsList -> 1131180620 -> "ClrL"  colorsList
                      phEnumColorimetric -> 1131180653 -> "Clrm"  colorimetric
                    phEventColoredPencil -> 1131180624 -> "ClrP"  colorPalette
                      phTypeColorPalette
                   phKeyColorPickerPrefs -> 1131180658 -> "Clrr"  colorPickerPrefs
                       phEventColorRange -> 1131180626 -> "ClrR"  colorRange
                             phKeyColors -> 1131180659 -> "Clrs"  colors
                            phTypeColors
                         phKeyColorSpace -> 1131180627 -> "ClrS"  colorSpace
                        phTypeColorSpace
                        phClassColorStop -> 1131180660 -> "Clrt"  colorStop
                         phKeyColorTable -> 1131180628 -> "ClrT"  colorTable
                     phTypeColorStopType -> 1131180665 -> "Clry"  colorStopType
                           phKeyColorize -> 1131180666 -> "Clrz"  colorize
                            phEventClose -> 1131180832 -> "Cls "  close
                          phEnumCloseAll -> 1131180865 -> "ClsA"  closeAll
                     phClassColorSampler -> 1131172717 -> "ClSm"  colorSampler
                      phKeyClosedSubpath -> 1131180912 -> "Clsp"  closedSubpath
                             phFormClass -> 1131180915 -> "Clss"  
                           phKeyCellSize -> 1131172730 -> "ClSz"  cellSize
                   phClassCloneStampTool -> 1131172972 -> "ClTl"  cloneStampTool
                         phKeyCommandKey -> 1131242571 -> "CmdK"  commandKey
                          phClassCommand -> 1131245156 -> "Cmnd"  command
                       phKeyCompensation -> 1131245678 -> "Cmpn"  compensation
                      phTypeCompensation
                        phKeyCompression -> 1131245682 -> "Cmpr"  compression
                         phEnumComposite -> 1131245683 -> "Cmps"  composite
                            phEnumCMYK64 -> 1129141062 -> "CMSF"  CMYK64
                        phClassCMYKColor -> 1129142595 -> "CMYC"  CMYKColorClass
                   phTypeCMYKSetupEngine -> 1129142597 -> "CMYE"  CMYKSetupEngine
                              phEnumCMYK -> 1129142603 -> "CMYK"  CMYK
                    phClassCMYKColorMode -> 1129142605 -> "CMYM"  CMYKColorMode
                        phClassCMYKSetup -> 1129142611 -> "CMYS"  CMYKSetup
                          phKeyCMYKSetup
                          phKeyConcavity -> 1131307894 -> "Cncv"  concavity
                        phTypeSourceMode -> 1131308142 -> "Cndn"  sourceModeType
                          phKeyCondition -> 1131308148 -> "Cndt"  condition
               phKeyConstrainProportions -> 1131311952 -> "CnsP"  constrainProportions
                           phKeyConstant -> 1131311988 -> "Cnst"  constant
                          phKeyConstrain
                              phKeyCount -> 1131312160 -> "Cnt "  count
                         phEventContract -> 1131312227 -> "Cntc"  contract
                      phEventConteCrayon -> 1131312195 -> "CntC"  centerCropMarks
                    phKeyCenterCropMarks
                       phTypeContourEdge -> 1131312197 -> "CntE"  contourEdge
                         phKeyContiguous -> 1131312231 -> "Cntg"  contiguous
                           phKeyContinue -> 1131312238 -> "Cntn"  continue
                        phKeyCountryName -> 1131312206 -> "CntN"  countryName
                            phEnumCenter -> 1131312242 -> "Cntr"  center
                             phKeyCenter
                           phKeyContrast
                         phKeyContinuity -> 1131312249 -> "Cnty"  continuity
                     phEnumConvertToCMYK -> 1131312707 -> "CnvC"  convertToCMYK
                     phEnumConvertToGray -> 1131312711 -> "CnvG"  convertToGray
                      phEnumConvertToLab -> 1131312716 -> "CnvL"  convertToLab
                      phEventConvertMode -> 1131312717 -> "CnvM"  convertMode
                            phKeyConvert -> 1131312754 -> "Cnvr"  convert
                           phTypeConvert
                      phEnumConvertToRGB -> 1131312722 -> "CnvR"  convertToRGB
                       phEventCanvasSize -> 1131312723 -> "CnvS"  canvasSize
                        phClassColorCast -> 1131375683 -> "ColC"  
                        phEventColorCast -> 1131375685 -> "ColE"  
                             phEventCopy -> 1668247673 -> "copy"  copyEvent
                      phEventCopyEffects -> 1131431512 -> "CpFX"  copyEffects
                    phKeyCopyrightNotice -> 1131442766 -> "CprN"  copyrightNotice
                      phEventCopyToLayer -> 1131435084 -> "CpTL"  copyToLayer
                            phKeyCaption -> 1131443310 -> "Cptn"  caption
                      phKeyCaptionWriter -> 1131443287 -> "CptW"  captionWriter
                               phKeyCopy -> 1131444512 -> "Cpy "  copy
                       phEventCopyMerged -> 1131444557 -> "CpyM"  copyMerged
                          phKeyCopyright -> 1131444594 -> "Cpyr"  copyright
                    phKeyCrackBrightness -> 1131569986 -> "CrcB"  crackBrightness
                         phKeyCrackDepth -> 1131569988 -> "CrcD"  crackDepth
                  phTypeCorrectionMethod -> 1131569997 -> "CrcM"  correctionMethod
                       phKeyCrackSpacing -> 1131570003 -> "CrcS"  crackSpacing
                             phKeyCredit -> 1131570292 -> "Crdt"  credit
                            phEnumCIERGB -> 1129465666 -> "CRGB"  CIERGB
                    phKeyCornerCropMarks -> 1131572803 -> "CrnC"  cornerCropMarks
                phKeyCurrentHistoryState -> 1131572808 -> "CrnH"  currentHistoryState
                       phKeyCurrentLight -> 1131572812 -> "CrnL"  currentLight
                            phKeyCurrent -> 1131572852 -> "Crnt"  current
                 phKeyCurrentToolOptions -> 1131572820 -> "CrnT"  currentToolOptions
                             phEventCrop -> 1131573104 -> "Crop"  crop
                       phClassCurvePoint -> 1131565172 -> "CrPt"  curvePoint
                       phEventCraquelure -> 1131573612 -> "Crql"  craquelure
                      phEnumCurrentLayer -> 1131573836 -> "CrrL"  currentLayer
                             phEnumCross -> 1131574048 -> "Crs "  cross
                        phEnumCoarseDots -> 1131574084 -> "CrsD"  coarseDots
                       phEventCrosshatch -> 1131574120 -> "Crsh"  crosshatch
                        phTypeCursorKind -> 1131574091 -> "CrsK"  cursorKind
                          phKeyCrossover -> 1131574131 -> "Crss"  crossover
                      phEventCrystallize -> 1131574132 -> "Crst"  crystallize
                   phEnumCreateDuplicate -> 1131574340 -> "CrtD"  createDroplet
                    phEventCreateDroplet
               phEnumCreateInterpolation -> 1131574345 -> "CrtI"  createInterpolation
                              phKeyCurve -> 1131574816 -> "Crv "  curve
                 phClassCurvesAdjustment -> 1131574849 -> "CrvA"  curvesAdjustment
                          phKeyCurveFile -> 1131574854 -> "CrvF"  curveFile
                           phClassCurves -> 1131574899 -> "Crvs"  curves
                           phEventCurves
                           phEnumCascade -> 1131635556 -> "Cscd"  cascade
                        phClassSelection -> 1668506988 -> "csel"  selectionClass
                            phEnumCustom -> 1131639840 -> "Cst "  customEnum
                       phKeyCustomForced -> 1131639878 -> "CstF"  customForced
                    phClassCustomPalette -> 1131639916 -> "Cstl"  customPaletteClass
                     phEnumCustomPattern -> 1131639917 -> "Cstm"  custom
                           phEventCustom
                             phKeyCustom
                        phKeyCustomMatte -> 1131639885 -> "CstM"  customMatte
                  phClassCustomPhosphors -> 1131639888 -> "CstP"  customPalette
                      phKeyCustomPalette
                       phEnumCustomStops -> 1131639891 -> "CstS"  customStops
                 phClassCustomWhitePoint -> 1131639895 -> "CstW"  customWhitePoint
                           phEventCutout -> 1131683872 -> "Ct  "  cutout
                           phKeyCategory -> 1131702130 -> "Ctgr"  category
                     phEnumCenteredFrame -> 1131704902 -> "CtrF"  centeredFrame
                       phEventCutToLayer -> 1131697228 -> "CtTL"  cutToLayer
                              phEventCut -> 1668641824 -> "cut "  cut
                              phEnumCyan -> 1132031520 -> "Cyn "  cyan
                               phKeyCyan
                             phEnumCyans -> 1132031603 -> "Cyns"  cyans
                             phKeyDarker -> 1147236971 -> "Dark"  
                         phClassDocument -> 1147366766 -> "Dcmn"  document
                                phKeyDCS -> 1145262880 -> "DCS "  DCS
                               phTypeDCS
                            phEnumDodgeH -> 1147430728 -> "DdgH"  dodgeH
                            phEnumDodgeM -> 1147430733 -> "DdgM"  dodgeM
                            phEnumDodgeS -> 1147430739 -> "DdgS"  dodgeS
                        phClassDodgeTool -> 1147425900 -> "DdTl"  dodgeTool
                    phKeyDiffusionDither -> 1147561540 -> "DffD"  diffusionDither
                   phEnumDiffusionDither -> 1147563588 -> "DfnD"  diffusionDitherEnum
                    phEventDefinePattern -> 1147563600 -> "DfnP"  definePattern
                         phKeyDefinition -> 1147563636 -> "Dfnt"  definition
                 phEventDifferenceClouds -> 1147564611 -> "DfrC"  differenceClouds
                         phEventDefringe -> 1147564647 -> "Dfrg"  defringe
                        phEnumDifference -> 1147564654 -> "Dfrn"  difference
                          phEventDiffuse -> 1147564832 -> "Dfs "  diffuse
                      phEventDiffuseGlow -> 1147564871 -> "DfsG"  diffuseGlow
                       phTypeDiffuseMode -> 1147564877 -> "DfsM"  diffuseMode
                         phEnumDiffusion -> 1147564910 -> "Dfsn"  diffusion
                   phEventDisableLayerFX -> 1684825720 -> "dlfx"  disableLayerFX
                           phEventDelete -> 1147958304 -> "Dlt "  delete
                           phEnumDiamond -> 1148022372 -> "Dmnd"  diamond
                           phKeyDiameter -> 1148023922 -> "Dmtr"  diameter
                phKeyDynamicColorSliders -> 1148087619 -> "DnmC"  dynamicColorSliders
                            phKeyDensity -> 1148089204 -> "Dnst"  density
                      phEventDeInterlace -> 1148089458 -> "Dntr"  deInterlace
                         phKeyDocumentID -> 1148150601 -> "DocI"  documentID
                            phTypeDouble -> 1685026146 -> "doub"  floatType
                             phTypeFloat
                         phTypeDeepDepth -> 1148208240 -> "DpDp"  deepDepth
                        phEventDuplicate -> 1148218467 -> "Dplc"  duplicate
                          phKeyDuplicate
                              phKeyDepth -> 1148220520 -> "Dpth"  depth
                             phTypeDepth
                             phEventDraw -> 1148346743 -> "Draw"  draw
                   phKeyDirectionBalance -> 1148347202 -> "DrcB"  directionBalance
                          phKeyDirection -> 1148347252 -> "Drct"  direction
                         phTypeDirection
                             phEnumDraft -> 1148348020 -> "Drft"  draft
                              phEnumDark -> 1148349216 -> "Drk "  dark
                      phKeyDarkIntensity -> 1148349257 -> "DrkI"  darkIntensity
                            phEnumDarken -> 1148349294 -> "Drkn"  darken
                           phKeyDarkness
                        phEnumDarkenOnly -> 1148349263 -> "DrkO"  darkenOnly
                      phEventDarkStrokes -> 1148349267 -> "DrkS"  darkStrokes
                       phClassDropShadow -> 1148343144 -> "DrSh"  dropShadow
                         phKeyDropShadow
                         phEventDryBrush -> 1148352834 -> "DryB"  dryBrush
                       phEnumDashedLines -> 1148414028 -> "DshL"  dashedLines
                         phEventDeselect -> 1148415075 -> "Dslc"  deselect
                          phEnumDissolve -> 1148415094 -> "Dslv"  dissolve
                        phEventDespeckle -> 1148416099 -> "Dspc"  despeckle
         phEnumDisplayCursorsPreferences -> 1148416067 -> "DspC"  displayCursorsPreferences
                       phKeyDisplaceFile -> 1148416070 -> "DspF"  displaceFile
                         phEventDisplace -> 1148416108 -> "Dspl"  displace
                    phKeyDisplacementMap -> 1148416077 -> "DspM"  displacementMap
                   phTypeDisplacementMap
                     phClassDisplayPrefs -> 1148416080 -> "DspP"  displayPrefs
                       phKeyDisplayPrefs
                       phKeyDestBlackMin -> 1148417090 -> "DstB"  destBlackMin
                       phKeyDestBlackMax -> 1148417132 -> "Dstl"  destBlackMax
                    phKeyDestinationMode -> 1148417101 -> "DstM"  destinationMode
                           phKeyDistance -> 1148417134 -> "Dstn"  distance
                           phEnumDistort -> 1148417138 -> "Dstr"  distort
                       phEventDistribute
                         phKeyDistortion
                       phKeyDistribution
                      phTypeDistribution
                 phEventDustAndScratches -> 1148417107 -> "DstS"  dustAndScratches
                        phEnumDesaturate -> 1148417140 -> "Dstt"  desaturate
                       phEventDesaturate
                       phKeyDestWhiteMax
                       phKeyDestWhiteMin -> 1148417111 -> "DstW"  destWhiteMin
                              phKeyDatum -> 1148461088 -> "Dt  "  datum
                        phKeyDateCreated -> 1148470130 -> "DtCr"  dateCreated
                      phKeyDotGainCurves -> 1148471107 -> "DtGC"  dotGainCurves
                            phKeyDotGain -> 1148471150 -> "DtGn"  dotGain
                       phKeyDitherAmount -> 1148479553 -> "DthA"  ditherAmount
                            phEnumBetter -> 1148479586 -> "Dthb"  better
                            phEnumFaster -> 1148479590 -> "Dthf"  faster
                     phKeyDitherPreserve -> 1148479600 -> "Dthp"  ditherPreserve
                      phKeyDitherQuality -> 1148479601 -> "Dthq"  ditherQuality
                     phTypeDitherQuality
                             phKeyDither -> 1148479602 -> "Dthr"  dither
                            phTypeDither
                             phKeyDetail -> 1148480544 -> "Dtl "  detail
                           phEnumDuotone -> 1148481056 -> "Dtn "  duotone
                       phClassDuotoneInk -> 1148481097 -> "DtnI"  duotoneInk
                      phClassDuotoneMode -> 1148481101 -> "DtnM"  duotoneMode
                    phClassTransferPoint -> 1148481104 -> "DtnP"  transferPoint
                              phEnumDots -> 1148482336 -> "Dts "  dots
                      phClassBevelEmboss -> 1700946540 -> "ebbl"  bevelEmboss
                        phKeyBevelEmboss
                            phEnumEBUITU -> 1161974816 -> "EBT "  eBUITU
                         phEnumCMYKColor -> 1162038617 -> "ECMY"  CMYKColorEnum
                               phKeyEdge -> 1164207904 -> "Edg "  edge
                     phKeyEdgeBrightness -> 1164207938 -> "EdgB"  edgeBrightness
                       phKeyEdgeFidelity -> 1164207942 -> "EdgF"  edgeFidelity
                      phKeyEdgeIntensity -> 1164207945 -> "EdgI"  edgeIntensity
                     phKeyEdgeSimplicity -> 1164207955 -> "EdgS"  edgeSimplicity
                      phKeyEdgeThickness -> 1164207956 -> "EdgT"  edgeThickness
                          phKeyEdgeWidth -> 1164207959 -> "EdgW"  edgeWidth
                             phKeyEffect -> 1164338787 -> "Effc"  effect
                     phEnum8BitsPerPixel -> 1164404802 -> "EghB"  8BitsPerPixel
               phEnumEliminateEvenFields -> 1164733765 -> "ElmE"  eliminateEvenFields
                          phClassElement -> 1164733806 -> "Elmn"  element
                phEnumEliminateOddFields -> 1164733775 -> "ElmO"  eliminateOddFields
                          phClassEllipse -> 1164734579 -> "Elps"  ellipse
                           phEnumEllipse
                          phKeyEmbedCMYK -> 1164796483 -> "EmbC"  embedCMYK
                          phKeyEmbedGray -> 1164796487 -> "EmbG"  embedGray
                           phKeyEmbedLab -> 1164796492 -> "EmbL"  embedLab
                      phKeyEmbedProfiles -> 1164796496 -> "EmbP"  embedProfiles
                           phKeyEmbedRGB -> 1164796498 -> "EmbR"  embedRGB
                            phEnumEmboss -> 1164796531 -> "Embs"  emboss
                           phEventEmboss
                       phKeyEmulsionDown -> 1164799044 -> "EmlD"  emulsionDown
                            phKeyEnabled -> 1701732706 -> "enab"  enabled
                           phKeyEncoding -> 1164862308 -> "Encd"  encoding
                          phTypeEncoding
                                phKeyEnd -> 1164862496 -> "End "  end
                       phKeyEndArrowhead -> 1164862529 -> "EndA"  endArrowhead
                            phKeyEndRamp -> 1164862546 -> "EndR"  endRamp
                         phKeyEndSustain -> 1164862547 -> "EndS"  endSustain
                             phKeyEngine -> 1164863342 -> "Engn"  engine
                        phFormEnumerated -> 1164864882 -> "Enmr"  
                        phTypeEnumerated -> 1701737837 -> "enum"  enumerated
                   phClassEPSPICTPreview -> 1162892099 -> "EPSC"  EPSPICTPreview
                 phClassEPSGenericFormat -> 1162892103 -> "EPSG"  EPSGenericFormat
                        phTypeEPSPreview -> 1162892112 -> "EPSP"  EPSPreview
                   phClassEPSTIFFPreview -> 1162892116 -> "EPST"  EPSTIFFPreview
                    phKeyExtendedQuality -> 1162964084 -> "EQlt"  extendedQuality
                         phEventEqualize -> 1165061242 -> "Eqlz"  equalize
                         phKeyEraserKind -> 1165128523 -> "ErsK"  eraserKind
                        phTypeEraserKind
                     phKeyEraseToHistory -> 1165128532 -> "ErsT"  eraseToHistory
                       phClassEraserTool -> 1165120620 -> "ErTl"  eraserTool
                         phEventExchange -> 1165517672 -> "Exch"  exchange
                        phKeyExactPoints -> 1165517648 -> "ExcP"  exactPoints
                             phEnumExact -> 1165517684 -> "Exct"  exact
                    phKeyExportClipboard -> 1165520963 -> "ExpC"  exportClipboard
                           phEventExpand -> 1165521006 -> "Expn"  expand
                           phClassExport -> 1165521010 -> "Expr"  export
                           phEventExport
                             phKeyExport
                           phKeyExposure -> 1165521011 -> "Exps"  exposure
                             phKeyExtend -> 1165522020 -> "Extd"  extend
                       phKeyExtrudeDepth -> 1165521988 -> "ExtD"  extrudeDepth
                   phKeyExtrudeSolidFace -> 1165521990 -> "ExtF"  extrudeSolidFace
              phKeyExtrudeMaskIncomplete -> 1165521997 -> "ExtM"  extrudeMaskIncomplete
                          phKeyExtension -> 1165522030 -> "Extn"  extension
                    phKeyExtensionsQuery -> 1165522001 -> "ExtQ"  extensionsQuery
                          phEventExtrude -> 1165522034 -> "Extr"  extrude
                      phKeyExtrudeRandom -> 1165522002 -> "ExtR"  extrudeRandom
                     phTypeExtrudeRandom
                        phKeyExtrudeSize -> 1165522003 -> "ExtS"  extrudeSize
                        phKeyExtrudeType -> 1165522004 -> "ExtT"  extrudeType
                       phTypeExtrudeType
                  phTypeEyeDropperSample -> 1165575280 -> "EyDp"  eyeDropperSampleType
                   phKeyEyeDropperSample -> 1165575282 -> "EyDr"  eyeDropperSample
                             phEventFade -> 1180787813 -> "Fade"  fade
                        phKeyFiberLength -> 1180856908 -> "FbrL"  fiberLength
                              phKeyFocus -> 1180922656 -> "Fcs "  focus
                            phEventFacet -> 1180922912 -> "Fct "  facet
                             phKeyFadeTo -> 1180980256 -> "FdT "  fadeTo
                       phKeyFadeoutSteps -> 1180988499 -> "FdtS"  fadeoutSteps
                               phKeyFile -> 1181314149 -> "File"  file
                        phEventFillFlash -> 1181314117 -> "FilE"  
                        phClassFillFlash -> 1181314118 -> "FilF"  
                      phKeyFileReference -> 1181314130 -> "FilR"  fileReference
                             phEventFill -> 1181491232 -> "Fl  "  fill
                               phKeyFill
                              phTypeFill
                          phEnumFillBack -> 1181500003 -> "FlBc"  fillBack
                          phKeyFillColor -> 1181500268 -> "FlCl"  fillColor
                         phTypeFillColor
                      phTypeFillContents -> 1181500270 -> "FlCn"  fillContents
                        phKeyFileCreator -> 1181500274 -> "FlCr"  fileCreator
                            phKeyFolders -> 1181508722 -> "Fldr"  folders
                              phEnumFile -> 1181508896 -> "Fle "  fileEnum
                          phEnumFillFore -> 1181501042 -> "FlFr"  fillFore
                         phClassFileInfo -> 1181501806 -> "FlIn"  fileInfo
                          phEnumFileInfo
                       phEnumFillInverse
                           phKeyFileInfo
                             phEventFlip -> 1181510000 -> "Flip"  flip
                      phEnumFullDocument -> 1181510724 -> "FllD"  fullDocument
                          phTypeFillMode -> 1181502820 -> "FlMd"  fillMode
                        phEventFilmGrain -> 1181510983 -> "FlmG"  filmGrain
                        phKeyFillNeutral -> 1181503092 -> "FlNt"  fillNeutral
                            phKeyFalloff -> 1181503334 -> "FlOf"  falloff
                       phKeyFlipVertical -> 1181511766 -> "FlpV"  
                        phKeyFlareCenter -> 1181512259 -> "FlrC"  flareCenter
                          phEnumFillSame -> 1181504365 -> "FlSm"  fillSame
                   phClassFlashPixFormat -> 1181512528 -> "FlsP"  flashPixFormat
                      phKeyFileSavePrefs -> 1181504336 -> "FlSP"  fileSavePrefs
                    phClassFileSavePrefs -> 1181504374 -> "FlSv"  fileSavePrefsClass
                          phEnumFullSize -> 1181504378 -> "FlSz"  fullSize
                     phEventFlattenImage -> 1181512777 -> "FltI"  flattenImage
                           phKeyFlatness -> 1181512814 -> "Fltn"  flatness
                           phEventFilter -> 1181512818 -> "Fltr"  filter
                            phKeyFlatten -> 1181512820 -> "Fltt"  flatten
                           phKeyFileType -> 1181504633 -> "FlTy"  fileType
                           phClassFormat -> 1181578272 -> "Fmt "  format
                             phKeyFormat
                        phKeyFunctionKey -> 1181639499 -> "FncK"  functionKey
                        phEventFindEdges -> 1181639749 -> "FndE"  findEdges
                          phEnumFineDots -> 1181631604 -> "FnDt"  fineDots
                     phKeyFingerpainting -> 1181640562 -> "Fngr"  fingerpainting
                   phClassFontDesignAxes -> 1181643844 -> "FntD"  fontDesignAxes
                     phKeyFontDesignAxes
                           phKeyFontName -> 1181643854 -> "FntN"  fontName
                      phKeyFontStyleName -> 1181643859 -> "FntS"  fontStyleName
                     phKeyFontTechnology -> 1181643860 -> "FntT"  fontTechnology
              phKeyFontDesignAxesVectors -> 1181643862 -> "FntV"  fontDesignAxesVectors
                       phKeyForcedColors -> 1181901635 -> "FrcC"  forcedColors
                      phTypeForcedColors
                         phTypeFrameFill -> 1181894252 -> "FrFl"  frameFill
                          phClassFrameFX -> 1181894232 -> "FrFX"  frameFX
                            phKeyFrameFX
                   phEnumForegroundColor -> 1181902659 -> "FrgC"  foregroundColor
                    phKeyForegroundColor
                    phKeyForegroundLevel -> 1181902668 -> "FrgL"  foregroundLevel
                         phEventFragment -> 1181902701 -> "Frgm"  fragment
                         phEnumFirstIdle -> 1181895012 -> "FrId"  firstIdle
                        phKeyFromBuiltin -> 1181904194 -> "FrmB"  fromBuiltin
                           phKeyFromMode -> 1181904205 -> "FrmM"  fromMode
                         phKeyFrameWidth -> 1181904215 -> "FrmW"  frameWidth
                             phEnumFront -> 1181904500 -> "Frnt"  front
                               phKeyFrom -> 1181904749 -> "From"  from
                          phKeyFrequency -> 1181905262 -> "Frqn"  frequency
                           phEventFresco -> 1181905763 -> "Frsc"  fresco
                             phEnumFirst -> 1181905780 -> "Frst"  first
                     phEnumFreeTransform -> 1181897842 -> "FrTr"  freeTransform
                           phEnumForward -> 1181906802 -> "Frwr"  forwardEnum
                          phKeySelection -> 1718838636 -> "fsel"  selection
                        phTypeFrameStyle -> 1179874412 -> "FStl"  frameStyle
           phKeyFreeTransformCenterState -> 1179935603 -> "FTcs"  freeTransformCenterState
                          phEventFeather -> 1182034034 -> "Fthr"  feather
                            phKeyFeather
                       phEnumFitOnScreen -> 1182027630 -> "FtOn"  fitOnScreen
                            phKeyForward -> 1182229536 -> "Fwd "  forward
                        phKeyFPXCompress -> 1182286701 -> "FxCm"  FPXCompress
                       phTypeFPXCompress
              phEnumFPXCompressLossyJPEG -> 1182288464 -> "FxJP"  FPXCompressLossyJPEG
                   phEnumFPXCompressNone -> 1182289519 -> "FxNo"  FPXCompressNone
                         phKeyFPXQuality -> 1182290284 -> "FxQl"  FPXQuality
                          phClassContour -> 1182290787 -> "FxSc"  
                            phKeyFPXSize -> 1182290810 -> "FxSz"  FPXSize
                            phKeyFPXView -> 1182291575 -> "FxVw"  FPXView
                          phKeyFuzziness -> 1182428787 -> "Fzns"  fuzziness
                phKeyGlobalLightingAngle -> 1734436716 -> "gagl"  globalLightingAngle
                      phClassGlobalAngle -> 1734503489 -> "gblA"  globalAngle
                        phKeyGlobalAngle
                                phKeyGCR -> 1195594272 -> "GCR "  GCR
                            phClassGuide -> 1197744160 -> "Gd  "  good
                              phEnumGood
                             phKeyGuides -> 1197761907 -> "Gdes"  guides
                    phTypeGuideGridColor -> 1197754226 -> "GdGr"  guideGridColor
                    phTypeGuideGridStyle -> 1197754195 -> "GdGS"  guideGridStyle
                      phClassGradientMap -> 1197755760 -> "GdMp"  gradientMapClass
                      phClassGuidesPrefs -> 1197756530 -> "GdPr"  guidesPrefs
                        phKeyGuidesPrefs
                        phKeyGuidesColor -> 1197765443 -> "GdsC"  guidesColor
                  phKeyGuidesCustomColor -> 1197765491 -> "Gdss"  guidesCustomColor
                        phKeyGuidesStyle -> 1197765459 -> "GdsS"  guidesStyle
                              phEventGet -> 1734702180 -> "getd"  get
                     phClassGIF89aExport -> 1195784249 -> "GF89"  GIF89aExport
                    phKeyGIFUseBestMatch -> 1195786829 -> "GFBM"  GIFUseBestMatch
                phEnumGIFColorFileColors -> 1195787078 -> "GFCF"  GIFColorFileColors 
      phEnumGIFRequiredColorSpaceIndexed -> 1195787081 -> "GFCI"  GIFRequiredColorSpaceIndexed
                      phKeyGIFColorLimit -> 1195787084 -> "GFCL"  GIFColorLimit
          phKeyGIFRequiredColorSpaceType -> 1195787091 -> "GFCS"  GIFRequiredColorSpaceType
         phTypeGIFRequiredColorSpaceType
            phEnumGIFColorFileColorTable -> 1195787092 -> "GFCT"  GIFColorFileColorTable
                   phKeyGIFExportCaption -> 1195787587 -> "GFEC"  GIFExportCaption
                        phClassGIFFormat -> 1195787890 -> "GFFr"  GIFFormat
             phEnumGIFRowOrderInterlaced -> 1195788622 -> "GFIN"  GIFRowOrderInterlaced
                    phKeyGIFRowOrderType -> 1195788628 -> "GFIT"  GIFRowOrderType
                   phTypeGIFRowOrderType
                phKeyGIFMaskChannelIndex -> 1195789641 -> "GFMI"  GIFMaskChannelIndex
      phEnumGIFColorFileMicrosoftPalette -> 1195789651 -> "GFMS"  GIFColorFileMicrosoftPalette
             phKeyGIFMaskChannelInverted -> 1195789654 -> "GFMV"  GIFMaskChannelInverted
                 phEnumGIFRowOrderNormal -> 1195789897 -> "GFNI"  GIFRowOrderNormal
                phEnumGIFPaletteAdaptive -> 1195790401 -> "GFPA"  GIFPaletteAdaptive
                   phEnumGIFPaletteExact -> 1195790405 -> "GFPE"  GIFPaletteExact
                     phKeyGIFPaletteFile -> 1195790406 -> "GFPF"  GIFPaletteFile
                     phKeyGIFPaletteType -> 1195790412 -> "GFPL"  GIFPaletteType
                    phTypeGIFPaletteType
                   phEnumGIFPaletteOther -> 1195790415 -> "GFPO"  GIFPaletteOther
                  phEnumGIFPaletteSystem -> 1195790419 -> "GFPS"  GIFPaletteSystem
                   phKeyGIFColorFileType -> 1195790420 -> "GFPT"  GIFColorFileType
                  phTypeGIFColorFileType
          phEnumGIFRequiredColorSpaceRGB -> 1195790919 -> "GFRG"  GIFRequiredColorSpaceRGB
            phKeyGIFTransparentIndexBlue -> 1195791426 -> "GFTB"  GIFTransparentIndexBlue
                phKeyGIFTransparentColor -> 1195791427 -> "GFTC"  GIFTransparentColor
           phKeyGIFTransparentIndexGreen -> 1195791431 -> "GFTG"  GIFTransparentIndexGreen
             phKeyGIFTransparentIndexRed -> 1195791442 -> "GFTR"  GIFTransparentIndexRed
                       phTypeGlobalClass -> 1198285379 -> "GlbC"  globalClass
                      phTypeGlobalObject -> 1198285391 -> "GlbO"  globalObject
                              phKeyGloss -> 1198288755 -> "Glos"  gloss
                            phEventGlass -> 1198289696 -> "Gls "  glass
                         phKeyGlowAmount -> 1198290753 -> "GlwA"  glowAmount
                     phEventGlowingEdges -> 1198290757 -> "GlwE"  glowingEdges
                    phKeyInnerGlowSource -> 1735161683 -> "glwS"  innerGlowSource
                      phKeyGlowTechnique -> 1198290772 -> "GlwT"  glowTechnique
                              phKeyGamma -> 1198353696 -> "Gmm "  gamma
                       phKeyGamutWarning -> 1198355543 -> "GmtW"  gamutWarning
                     phClassGeneralPrefs -> 1198420560 -> "GnrP"  generalPreferences
                      phClassPreferences
                phEnumGeneralPreferences
                       phKeyGeneralPrefs
                            phEnumGray18 -> 1198666040 -> "Gr18"  gray18
                            phEnumGray22 -> 1198666290 -> "Gr22"  gray22
                            phEnumGray50 -> 1198667056 -> "Gr50"  gray50
                           phKeyGradient -> 1198678372 -> "Grad"  gradient
                       phEventGraphicPen -> 1198678352 -> "GraP"  graphicPen
                       phKeyGrayBehavior -> 1198670440 -> "GrBh"  grayBehavior
                      phTypeGrayBehavior
                    phEnumGrainContrasty -> 1198670702 -> "GrCn"  grainContrasty
                          phKeyGridColor -> 1198679107 -> "GrdC"  gridColor
                     phClassGradientFill -> 1198679142 -> "Grdf"  
                       phKeyGradientFill
                      phTypeGradientForm -> 1198679110 -> "GrdF"  gradientForm
                          phKeyGridMajor -> 1198679117 -> "GrdM"  gridMajor
                         phClassGradient -> 1198679150 -> "Grdn"  gradientClassEvent
                         phEventGradient
                          phKeyGridMinor
                    phKeyGridCustomColor -> 1198679155 -> "Grds"  gridCustomColor
                          phKeyGridStyle -> 1198679123 -> "GrdS"  gridStyle
                          phKeyGridUnits -> 1198679156 -> "Grdt"  gridUnits
                      phTypeGradientType -> 1198679124 -> "GrdT"  gradientType
                      phEnumGradientFill -> 1198671468 -> "GrFl"  gradientFill
                      phEventGradientMap -> 1198673264 -> "GrMp"  gradientMapEvent
                             phEnumGreen -> 1198681632 -> "Grn "  grain
                            phEventGrain
                              phKeyGrain
                              phKeyGreen
                    phKeyGreenBlackPoint -> 1198681666 -> "GrnB"  greenBlackPoint
                      phEnumGrainClumped -> 1198681667 -> "GrnC"  grainClumped
                        phEnumGrainyDots -> 1198681668 -> "GrnD"  grainyDots
                     phEnumGrainEnlarged -> 1198681669 -> "GrnE"  grainEnlarged
                         phKeyGreenGamma -> 1198681671 -> "GrnG"  greenGamma
                   phEnumGrainHorizontal -> 1198681672 -> "GrnH"  grainHorizontal
                      phEnumGrainRegular -> 1198681682 -> "GrnR"  grainRegular
                            phEnumGreens -> 1198681715 -> "Grns"  graininess
                         phKeyGraininess
                          phKeyGrainType -> 1198681716 -> "Grnt"  grainType
                         phTypeGrainType
                     phEnumGrainVertical -> 1198681686 -> "GrnV"  grainVertical
                    phKeyGreenWhitePoint -> 1198681687 -> "GrnW"  greenWhitePoint
                             phKeyGreenX -> 1198681688 -> "GrnX"  greenX
                             phKeyGreenY -> 1198681689 -> "GrnY"  greenY
                             phEventGrow -> 1198681975 -> "Grow"  grow
                          phEnumGraphics -> 1198682144 -> "Grp "  graphics
                            phEventGroup -> 1198682188 -> "GrpL"  groupEvent
                        phClassGrayscale -> 1198682979 -> "Grsc"  grayscale
                         phEnumGrainSoft -> 1198674790 -> "GrSf"  grainSoft
                      phEnumGrainSpeckle -> 1198674800 -> "GrSp"  grainSpeckle
                    phEnumGrainSprinkles -> 1198674802 -> "GrSr"  grainSprinkles
                        phClassGraySetup -> 1198674804 -> "GrSt"  grainStippled
                     phEnumGrainStippled
                          phKeyGraySetup
                     phClassGradientTool -> 1198675052 -> "GrTl"  gradientTool
                         phKeyGroutWidth -> 1198683223 -> "GrtW"  groutWidth
                              phKeyGroup -> 1198683504 -> "Grup"  group
                              phEnumGray -> 1198684448 -> "Gry "  gray
                               phKeyGray
                         phEnumGrayScale -> 1198684515 -> "Gryc"  grayScale
                    phClassGrayscaleMode -> 1198684531 -> "Grys"  grayscaleMode
                        phEnumGrayscales
                            phEnumGray16 -> 1198684504 -> "GryX"  gray16
              phEnumGaussianDistribution -> 1198747168 -> "Gsn "  gaussianDistribution
                     phEventGaussianBlur -> 1198747202 -> "GsnB"  gaussianBlur
                        phKeyGutterWidth -> 1198814295 -> "GttW"  gutterWidth
             phEnumGuidesGridPreferences -> 1198875719 -> "GudG"  guidesGridPreferences
                               phEnumHue -> 1210064928 -> "H   "  hue
                                phKeyHue
                 phClassHistoryBrushTool -> 1212306540 -> "HBTl"  historyBrushTool
                             phEventHide -> 1214521376 -> "Hd  "  hide
                           phEnumHideAll -> 1214529900 -> "HdAl"  hideAll
                           phKeyHeadline -> 1214540910 -> "Hdln"  headline
                             phKeyHeader -> 1214542368 -> "Hdr "  header
                     phEnumHideSelection -> 1214534508 -> "HdSl"  hideSelection
                              phEnumHDTV -> 1212437590 -> "HDTV"  HDTV
                       phEnumHighQuality -> 1214736416 -> "Hgh "  highQuality
                      phKeyHighlightArea -> 1214736449 -> "HghA"  highlightArea
                        phEnumHighlights -> 1214736492 -> "Hghl"  highlights
                    phKeyHighlightLevels -> 1214736460 -> "HghL"  highlightLevels
                         phEventHighPass -> 1214736464 -> "HghP"  highPass
                  phKeyHighlightStrength -> 1214736467 -> "HghS"  highlightStrength
                             phKeyHeight -> 1214736500 -> "Hght"  height
                     phKeyHighlightColor -> 1751608387 -> "hglC"  highlightColor
                      phKeyHighlightMode -> 1751608397 -> "hglM"  highlightMode
                   phKeyHighlightOpacity -> 1751608399 -> "hglO"  highlightOpacity
                              phEnumHigh -> 1214867304 -> "High"  high
                      phEnumHalftoneFile -> 1215063622 -> "HlfF"  halftoneFile
                       phKeyHalftoneFile
                     phClassHalftoneSpec -> 1215063664 -> "Hlfp"  halftoneSpec
                       phKeyHalftoneSpec
                   phClassHalftoneScreen -> 1215063635 -> "HlfS"  halftoneScreen
                    phEnumHalftoneScreen
                   phEventHalftoneScreen
                     phKeyHalftoneScreen
                       phKeyHalftoneSize -> 1215058810 -> "HlSz"  halftoneSize
                         phEnumHardLight -> 1215456332 -> "HrdL"  hardLight
                           phKeyHardness -> 1215456366 -> "Hrdn"  hardness
                phTypeHorizontalLocation -> 1215461964 -> "HrzL"  horizontalLocation
                        phEnumHorizontal -> 1215461998 -> "Hrzn"  horizontal
                         phKeyHorizontal
                    phEnumHorizontalOnly -> 1215461967 -> "HrzO"  horizontalOnly
                    phKeyHorizontalScale -> 1215461971 -> "HrzS"  horizontalScale
                         phClassHSBColor -> 1213416003 -> "HSBC"  HSBColorClass
                          phEnumHSBColor -> 1213416044 -> "HSBl"  HSBColorEnum
                     phClassHSBColorMode -> 1213416013 -> "HSBM"  HSBColorMode
                           phEventHSBHSL -> 1215521360 -> "HsbP"  
                          phEnumHSLColor -> 1213418563 -> "HSLC"  HSLColor
                 phKeyHistoryStateSource -> 1215517523 -> "HsSS"  historyStateSource
                      phKeyHistoryStates -> 1215517556 -> "HsSt"  historyStates
               phClassHueSatAdjustmentV2 -> 1215525938 -> "Hst2"  hueSatAdjustmentV2
                 phClassHueSatAdjustment -> 1213428801 -> "HStA"  hueSatAdjustment
                 phKeyHistoryBrushSource -> 1215525954 -> "HstB"  historyBrushSource
                         phEnumHistogram -> 1215525991 -> "Hstg"  histogram
                           phKeyHostName -> 1215525966 -> "HstN"  hostName
             phEnumHistoryPaletteOptions -> 1215525967 -> "HstO"  historyPaletteOptions
                phEnumHistoryPreferences -> 1215525968 -> "HstP"  historyPreferences
                       phKeyHistoryPrefs
                    phClassHueSaturation -> 1213428850 -> "HStr"  hueSaturation
                    phEventHueSaturation
                     phClassHistoryState -> 1215525971 -> "HstS"  historyState
                phTypeHistoryStateSource
                        phKeyHostVersion -> 1215525974 -> "HstV"  hostVersion
                           phEnumHistory -> 1215526009 -> "Hsty"  history
                             phEnumHeavy -> 1215723808 -> "Hvy "  heavy
                             phEnumIBMPC -> 1229081936 -> "IBMP"  IBMPC
               phKeyInterfaceColorBlue32 -> 1229144648 -> "ICBH"  interfaceColorBlue32
                phKeyInterfaceColorBlue2 -> 1229144652 -> "ICBL"  interfaceColorBlue2
                               phEnumICC -> 1229144864 -> "ICC "  ICC
                          phKeyICCEngine -> 1229144901 -> "ICCE"  ICCEngine
                       phKeyICCSetupName -> 1229144948 -> "ICCt"  ICCSetupName
              phKeyInterfaceColorGreen32 -> 1229145928 -> "ICGH"  interfaceColorGreen32
               phKeyInterfaceColorGreen2 -> 1229145932 -> "ICGL"  interfaceColorGreen2
                   phClassInterfaceColor -> 1229155442 -> "IClr"  interfaceColor
                              phEnumIcon -> 1231253024 -> "Icn "  icon
                phKeyInterfaceColorRed32 -> 1229148744 -> "ICRH"  interfaceColorRed32
                 phKeyInterfaceColorRed2 -> 1229148748 -> "ICRL"  interfaceColorRed2
                               phKeyIdle -> 1231318117 -> "Idle"  idle
                        phFormIdentifier -> 1231318644 -> "Idnt"  ID
                                 phKeyID
                            phEnumIdleVM -> 1231312461 -> "IdVM"  idleVM
                        phClassIFFFormat -> 1229342278 -> "IFFF"  
                            phEnumIgnore -> 1231515250 -> "Ignr"  ignore
                   phTypeInnerGlowSource -> 1229411186 -> "IGSr"  innerGlowSourceType
           phClassIllustratorPathsExport -> 1231844176 -> "IlsP"  illustratorPathsExport
                             phEnumImage -> 1231906592 -> "Img "  image
                       phKeyImageBalance -> 1231906626 -> "ImgB"  imageBalance
                       phClassImagePoint -> 1231906640 -> "ImgP"  imageCachePreferences
             phEnumImageCachePreferences
                        phEventImageSize -> 1231906643 -> "ImgS"  imageSize
                           phClassImport -> 1231908978 -> "Impr"  import
                           phEventImport
                             phKeyImport
                      phKeyImpressionist -> 1231908979 -> "Imps"  impressionist
                           phEnumStampIn -> 1231953952 -> "In  "  in
                                 phKeyIn
              phKeyInterfaceButtonUpFill -> 1231962694 -> "InBF"  interfaceButtonUpFill
                 phClassIndexedColorMode -> 1231971395 -> "IndC"  indexedColorMode
                      phEnumIndexedColor -> 1231971436 -> "Indl"  indexedColor
                  phFormAbsolutePosition -> 1768842360 -> "indx"  
                             phFormIndex
                phEnumInfoPaletteOptions -> 1231971920 -> "InfP"  infoPaletteOptions
         phEnumInfoPaletteToggleSamplers -> 1231971924 -> "InfT"  infoPaletteToggleSamplers
                          phKeyInkColors -> 1231973187 -> "InkC"  inkColors
                      phEventInkOutlines -> 1231973199 -> "InkO"  inkOutlines
                               phKeyInks -> 1231973235 -> "Inks"  inks
                      phClassInkTransfer -> 1231973204 -> "InkT"  inkTransfer
                      phKeyInputMapRange -> 1231973746 -> "Inmr"  inputMapRange
                         phKeyInputRange -> 1231974514 -> "Inpr"  inputRange
                              phKeyInput -> 1231974516 -> "Inpt"  input
                        phEnumInnerBevel -> 1231974978 -> "InrB"  innerBevel
                            phEnumInside -> 1231975268 -> "Insd"  inside
                        phEnumInsetFrame -> 1231975238 -> "InsF"  insetFrame
                     phKeyInterfaceBlack -> 1231975490 -> "IntB"  interfaceBlack
          phKeyInterfaceIconFillSelected -> 1231975523 -> "Intc"  interfaceIconFillSelected
                phKeyInterlaceCreateType -> 1231975491 -> "IntC"  interlaceCreateType
               phTypeInterlaceCreateType
                    phKeyInterfaceBorder -> 1231975524 -> "Intd"  interfaceBorder
                             phKeyIntent -> 1231975525 -> "Inte"  intent
                            phTypeIntent
             phKeyInterlaceEliminateType -> 1231975493 -> "IntE"  interlaceEliminateType
            phTypeInterlaceEliminateType
            phKeyInterfaceIconFillDimmed -> 1231975494 -> "IntF"  interfaceIconFillDimmed
            phKeyInterfaceBevelHighlight -> 1231975496 -> "IntH"  interfaceBevelHighlight
            phKeyInterfaceIconFillActive -> 1231975497 -> "IntI"  interfaceIconFillActive
          phKeyInterfaceButtonDarkShadow -> 1231975531 -> "Intk"  interfaceButtonDarkShadow
           phKeyInterfaceIconFrameActive -> 1231975533 -> "Intm"  interfaceIconFrameActive
                phKeyInterpolationMethod -> 1231975501 -> "IntM"  interpolationMethod
                          phKeyIntensity -> 1231975534 -> "Intn"  intensity
                     phTypeInterpolation -> 1231975536 -> "Intp"  interpolationType
               phKeyInterfacePaletteFill -> 1231975504 -> "IntP"  interfacePaletteFill
                        phEventIntersect -> 1231975538 -> "Intr"  interfaceIconFrameDimmed
           phKeyInterfaceIconFrameDimmed
                          phKeyInterlace
                      phKeyInterpolation
                       phKeyInterfaceRed -> 1231975506 -> "IntR"  interfaceRed
         phKeyInterfaceIconFrameSelected -> 1231975507 -> "IntS"  interfaceIconFrameSelected
            phKeyInterfaceButtonDownFill -> 1231975540 -> "Intt"  interfaceButtonDownFill
         phKeyInterfaceToolTipBackground -> 1231975508 -> "IntT"  interfaceToolTipBackground
               phKeyInterfaceBevelShadow -> 1231975542 -> "Intv"  interfaceBevelShadow
                    phEventIntersectWith -> 1231975511 -> "IntW"  interfaceWhite
                     phKeyInterfaceWhite
                         phKeyInvertMask -> 1231976013 -> "InvM"  invertMask
                           phClassInvert -> 1231976050 -> "Invr"  invert
                           phEventInvert
                             phKeyInvert
                          phEventInverse -> 1231976051 -> "Invs"  inverse
                      phKeyInvertSource2 -> 1231976019 -> "InvS"  invertSource2
                      phKeyInvertTexture -> 1231976020 -> "InvT"  invertTexture
                        phClassInnerGlow -> 1232226156 -> "IrGl"  innerGlow
                          phKeyInnerGlow
                      phClassInnerShadow -> 1232229224 -> "IrSh"  innerShadow
                        phKeyInnerShadow
                            phKeyIsDirty -> 1232290930 -> "IsDr"  isDirty
    phKeyInterfaceTransparencyBackground -> 1230258791 -> "ITBg"  interfaceTransparencyBackground
    phKeyInterfaceTransparencyForeground -> 1230259815 -> "ITFg"  interfaceTransparencyForeground
                          phKeyItemIndex -> 1232366921 -> "ItmI"  itemIndex
               phKeyInterfaceToolTipText -> 1230263380 -> "ITTT"  interfaceToolTipText
                       phClassJPEGFormat -> 1246774599 -> "JPEG"  JPEG
                              phEnumJPEG
                        phKeyJPEGQuality -> 1246774609 -> "JPEQ"  JPEGQuality
                           phEventJumpto -> 1248883823 -> "Jpto"  jumpto
                        phEnumJustifyAll -> 1249080385 -> "JstA"  justifyAll
                       phEnumJustifyFull -> 1249080390 -> "JstF"  justifyFull
                            phTypeKelvin -> 1265399406 -> "Klvn"  kelvin
                               phKeyKind -> 1265525792 -> "Knd "  kind
                       phEnumKeepProfile -> 1263563375 -> "KPro"  keepProfile
                            phKeyKerning -> 1265790567 -> "Krng"  kerning
               phEnumKeyboardPreferences -> 1266246224 -> "KybP"  keyboardPreferences
                           phKeyKeywords -> 1266251620 -> "Kywd"  keywords
                               phEnumLab -> 1281450528 -> "Lab "  lab
                 phKeyLocalLightingAngle -> 1818322796 -> "lagl"  localLightingAngle
              phKeyLocalLightingAltitude -> 1281453156 -> "Lald"  localLightingAltitude
                             phEnumLab48 -> 1281508166 -> "LbCF"  lab48
                         phClassLabColor -> 1281508204 -> "LbCl"  labColor
                          phEnumLabColor
                     phClassLabColorMode -> 1281508173 -> "LbCM"  labColorMode
                             phKeyLabels -> 1281518707 -> "Lbls"  labels
                         phKeyLocalRange -> 1281584210 -> "LclR"  localRange
                           phKeyLocation -> 1281586286 -> "Lctn"  location
                phEnumLightDirBottomLeft -> 1279541836 -> "LDBL"  lightDirBottomLeft
               phEnumLightDirBottomRight -> 1279541842 -> "LDBR"  lightDirBottomRight
                    phEnumLightDirBottom -> 1279541876 -> "LDBt"  lightDirBottom
                      phEnumLightDirLeft -> 1279544422 -> "LDLf"  lightDirLeft
                            phKeyLeading -> 1281650279 -> "Ldng"  leading
                     phEnumLightDirRight -> 1279545959 -> "LDRg"  lightDirRight
                   phEnumLightDirTopLeft -> 1279546444 -> "LDTL"  lightDirTopLeft
                       phEnumLightDirTop -> 1279546480 -> "LDTp"  lightDirTop
                  phEnumLightDirTopRight -> 1279546450 -> "LDTR"  lightDirTopRight
                              phEnumLeft -> 1281713780 -> "Left"  left
                               phKeyLeft
                     phClassLayerEffects -> 1281713784 -> "Lefx"  layerEffects
                       phKeyLayerEffects
                       phEnumLeft_PLUGIN -> 1281782816 -> "Lft "  leftPlugin
                   phClassLayerFXVisible -> 1818654838 -> "lfxv"  layerFXVisible
                     phKeyLayerFXVisible
                          phKeyLightDark -> 1281836146 -> "LgDr"  lightDark
                  phEnumLightDirectional -> 1281845316 -> "LghD"  lightDirection
                     phKeyLightDirection
                    phTypeLightDirection
                  phEventLightingEffects -> 1281845317 -> "LghE"  lightingEffects
                       phKeyLightenGrout -> 1281845319 -> "LghG"  lightenGrout
                     phKeyLightIntensity -> 1281845321 -> "LghI"  lightIntensity
                           phEnumLighten -> 1281845358 -> "Lghn"  lighten
                       phEnumLightenOnly -> 1281845327 -> "LghO"  lightOmni
                         phEnumLightOmni
                      phKeyLightPosition -> 1281845328 -> "LghP"  lightPosition
                     phTypeLightPosition
                      phClassLightSource -> 1281845331 -> "LghS"  lightSource
                         phEnumLightSpot
                        phKeyLightSource
                         phEnumLightness -> 1281845364 -> "Lght"  lightness
                          phKeyLightness
                          phKeyLightType -> 1281845332 -> "LghT"  lightType
                         phTypeLightType
                             phEnumLight -> 1281848352 -> "Lgt "  light
                         phEnumLightBlue -> 1281848386 -> "LgtB"  lightBlue
                         phEnumLightGray -> 1281848391 -> "LgtG"  lightGray
                          phEnumLightRed -> 1281848402 -> "LgtR"  lightRed
                            phKeyLighter -> 1281976168 -> "Ligh"  
                               phKeyLine -> 1281977957 -> "Line"  line
                          phKeyLuminance -> 1282240099 -> "Lmnc"  luminance
                        phEnumLuminosity -> 1282240115 -> "Lmns"  luminosity
                             phClassLine -> 1282285600 -> "Ln  "  lineClass
                              phEnumLine
                          phKeyLandscape -> 1282303091 -> "Lnds"  landscape
                         phEnumLongLines -> 1282303820 -> "LngL"  longLines
                       phEnumLongStrokes -> 1282303827 -> "LngS"  longStrokes
                             phKeyLength -> 1282303860 -> "Lngt"  length
                             phEventLink -> 1282304800 -> "Lnk "  link
                            phEnumLinked -> 1282304868 -> "Lnkd"  linked
                     phKeyLinkedLayerIDs -> 1282304844 -> "LnkL"  linkedLayerIDs
                            phEnumLinear -> 1282306592 -> "Lnr "  linear
                             phEnumLines -> 1282306848 -> "Lns "  lens
                               phKeyLens
                              phTypeLens
                        phEventLensFlare -> 1282306886 -> "LnsF"  lensFlare
                                phKeyLog -> 1282369312 -> "Log "  log
                           phTypeInteger -> 1819242087 -> "long"  integer
                               phEnumLow -> 1282373408 -> "Low "  low
                phEnumLightPosBottomLeft -> 1280328268 -> "LPBL"  lightPosBottomLeft
               phEnumLightPosBottomRight -> 1280328306 -> "LPBr"  lightPosBottomRight
                    phEnumLightPosBottom -> 1280328308 -> "LPBt"  lightPosBottom
                      phEnumLightPosLeft -> 1280330854 -> "LPLf"  lightPosLeft
                     phEnumLightPosRight -> 1280332391 -> "LPRg"  lightPosRight
                   phEnumLightPosTopLeft -> 1280332876 -> "LPTL"  lightPosTopLeft
                       phEnumLightPosTop -> 1280332912 -> "LPTp"  lightPosTop
                  phEnumLightPosTopRight -> 1280332882 -> "LPTR"  lightPosTopRight
                             phEnumLarge -> 1282565920 -> "Lrg "  large
                 phKeyLegacySerialString -> 1817398899 -> "lSNs"  
                              phEnumLast -> 1282634784 -> "Lst "  last
                        phEnumLastFilter -> 1282634822 -> "LstF"  lastFilter
                      phKeyLastTransform -> 1282634836 -> "LstT"  lastTransform
                       phKeyLUTAnimation -> 1280601709 -> "LTnm"  LUTAnimation
                              phKeyLevel -> 1282829344 -> "Lvl "  level
                 phClassLevelsAdjustment -> 1282829377 -> "LvlA"  levelsAdjustment
                        phEnumLevelBased -> 1282829378 -> "LvlB"  levelBased
                           phClassLevels -> 1282829427 -> "Lvls"  levels
                           phEventLevels
                             phKeyLevels
                        phEnumLowQuality -> 1282875424 -> "Lw  "  lowQuality
                          phKeyLowerCase -> 1282884467 -> "LwCs"  lowerCase
                             phEnumLower -> 1282896416 -> "Lwr "  lower
                            phClassLayer -> 1283027488 -> "Lyr "  layer
                              phKeyLayer
                            phKeyLayerID -> 1283027529 -> "LyrI"  layerID
                          phKeyLayerName -> 1283027534 -> "LyrN"  layerName
                      phEnumLayerOptions -> 1283027535 -> "LyrO"  layerOptions
              phEnumLayersPaletteOptions -> 1283027536 -> "LyrP"  layersPaletteOptions
                             phKeyLayers -> 1283027571 -> "Lyrs"  layers
                     phKeyLZWCompression -> 1280988995 -> "LZWC"  LZWCompression
                    phEnumMasterAdaptive -> 1296131184 -> "MAdp"  masterAdaptive
                              phEnumMaya -> 1298233697 -> "Maya"  
                   phEnumMacintoshSystem -> 1298361939 -> "McnS"  macintoshSystem
                         phEnumMacintosh -> 1298361972 -> "Mcnt"  macintosh
                   phClassMacPaintFormat -> 1298354286 -> "McPn"  macPaintFormat
                      phEnumMacThumbnail -> 1298355304 -> "McTh"  macThumbnail
                             phClassMode -> 1298407456 -> "Md  "  mode
                               phKeyMode
                              phTypeMode
                            phEnumMiddle -> 1298424940 -> "Mddl"  middle
                          phEnumModeGray -> 1298417522 -> "MdGr"  modeGray
                            phEnumMedium -> 1298426221 -> "Mdim"  medium
                     phEnumMediumQuality -> 1298427168 -> "Mdm "  mediumQuality
                        phEnumMediumBlue -> 1298427202 -> "MdmB"  mediumBlue
                        phEnumMediumDots -> 1298427204 -> "MdmD"  mediumDots
                       phEnumMediumLines -> 1298427212 -> "MdmL"  mediumLines
                     phEnumMediumStrokes -> 1298427219 -> "MdmS"  mediumStrokes
                           phEventMedian -> 1298427424 -> "Mdn "  median
                           phKeyMidpoint -> 1298428014 -> "Mdpn"  midpoint
                           phEnumModeRGB -> 1298420295 -> "MdRG"  modeRGB
                      phKeyMidtoneLevels -> 1298429004 -> "MdtL"  midtoneLevels
                          phEnumMidtones -> 1298429038 -> "Mdtn"  midtones
                    phKeyManipulationFOV -> 1298558838 -> "Mfov"  manipulationFOV
                       phClassMagicPoint -> 1298621296 -> "Mgcp"  magicPoint
                  phClassMagicEraserTool -> 1298613618 -> "MgEr"  magicEraserTool
                           phEnumMagenta -> 1298624116 -> "Mgnt"  magenta
                          phEnumMagentas
                            phKeyMagenta
                             phEventMake -> 1298866208 -> "Mk  "  make
                        phKeyMakeVisible -> 1298880115 -> "MkVs"  makeVisible
                 phClassMultichannelMode -> 1298953283 -> "MltC"  multichannelMode
                      phEnumMultichannel -> 1298953320 -> "Mlth"  multichannel
                          phEnumMultiply -> 1298953328 -> "Mltp"  multiply
                 phEnumMemoryPreferences -> 1299018320 -> "MmrP"  memoryPreferences
                 phKeyMemoryUsagePercent -> 1299018325 -> "MmrU"  memoryUsagePercent
                         phClassMenuItem -> 1299062816 -> "Mn  "  menuItemClass
                      phKeyMonochromatic -> 1299080040 -> "Mnch"  monochromatic
                          phTypeMenuItem -> 1299073396 -> "MnIt"  menuItemType
                          phEventMinimum -> 1299082528 -> "Mnm "  minimum
                            phKeyMinimum
                          phEnumMonotone -> 1299084398 -> "Mntn"  monotone
                      phEnumMonitorSetup -> 1299084371 -> "MntS"  monitorSetup
                           phEnumMonitor -> 1299148393 -> "Moni"  monitor
                             phEventMove -> 1836021349 -> "move"  move
                           phKeyMapBlack -> 1299202668 -> "MpBl"  mapBlack
                  phEnumMasterPerceptual -> 1297114482 -> "MPer"  masterPerceptual
                       phKeyMappingShape -> 1299212115 -> "MpgS"  mappingShape
                            phKeyMapping -> 1299213927 -> "Mpng"  mapping
                     phEnumMergeChannels -> 1299343171 -> "MrgC"  mergeChannels
                            phEnumMerged -> 1299343204 -> "Mrgd"  merged
                             phKeyMerged
                              phKeyMerge -> 1299343205 -> "Mrge"  merge
                      phEnumMergedLayers -> 1299343180 -> "MrgL"  mergeLayers
                      phEventMergeLayers
                     phEventMergeVisible -> 1299343190 -> "MrgV"  mergeVisible
                           phEventMosaic -> 1299407648 -> "Msc "  mosaic
                    phEventMosaic_PLUGIN -> 1299407700 -> "MscT"  mosaicPlugin
                   phEnumMasterSelective -> 1297311084 -> "MSel"  masterSelective
                            phKeyMessage -> 1299408741 -> "Msge"  message
                             phClassMask -> 1299409696 -> "Msk "  mask
                              phEnumMask
                       phEnumMaskedAreas -> 1299409729 -> "MskA"  maskedAreas
                     phTypeMaskIndicator -> 1299409737 -> "MskI"  maskIndicator
                       phKeyMismatchCMYK -> 1299410243 -> "MsmC"  mismatchCMYK
                       phKeyMismatchGray -> 1299410247 -> "MsmG"  mismatchGray
                        phKeyMismatchRGB -> 1299410258 -> "MsmR"  mismatchRGB
                 phEventMergeSpotChannel -> 1297313908 -> "MSpt"  mergeSpotChannel
                             phKeyMethod -> 1299474532 -> "Mthd"  method
                            phTypeMethod
                       phEventMotionBlur -> 1299476034 -> "MtnB"  motionBlur
                           phKeyMaterial -> 1299477100 -> "Mtrl"  material
                             phKeyMatrix -> 1299477112 -> "Mtrx"  matrix
                         phKeyMatteColor -> 1299477571 -> "MttC"  matteColor
                        phTypeMatteColor
                             phKeyMoveTo -> 1299600416 -> "MvT "  moveTo
                    phEnumMaximumQuality -> 1299737888 -> "Mxm "  maximum
                          phEventMaximum
                            phKeyMaximum
                           phEnumMaximum -> 1299737965 -> "Mxmm"  maximumEnum
                      phKeyMaximumStates -> 1299737939 -> "MxmS"  maximumStates
                        phEventMezzotint -> 1299870830 -> "Mztn"  mezzotint
                      phKeyMezzotintType -> 1299870804 -> "MztT"  mezzotintType
                     phTypeMezzotintType
                                phEnumNo -> 1310728224 -> "N   "  no
                phKeyNumberOfCacheLevels -> 1313039208 -> "NCch"  numberOfCacheLevels
                phEnumMultiNoCompositePS -> 1313041741 -> "NCmM"  multiNoCompositePS
                     phEnumNoCompositePS -> 1313041776 -> "NCmp"  noCompositePS
               phEnumSingleNoCompositePS -> 1313041747 -> "NCmS"  singleNoCompositePS
                         phEventNeonGlow -> 1313303671 -> "NGlw"  neonGlow
                           phKeyNegative -> 1315402870 -> "Ngtv"  negative
                             phEnumNikon -> 1315663392 -> "Nkn "  nikon
                          phEnumNikon105 -> 1315663409 -> "Nkn1"  nikon105
                               phKeyName -> 1315774496 -> "Nm  "  name
                          phKeyNumLights
                   phKeyNumberOfChildren -> 1315791427 -> "NmbC"  numberOfChildren
                  phKeyNumberOfDocuments -> 1315791428 -> "NmbD"  numberOfDocuments
                 phKeyNumberOfGenerators -> 1315791431 -> "NmbG"  numberOfGenerators
                     phKeyNumberOfLayers -> 1315791436 -> "NmbL"  numberOfLayers
                     phKeyNumberOfLevels
                   phKeyNumberOfChannels -> 1315791439 -> "NmbO"  numberOfChannels
                      phKeyNumberOfPaths -> 1315791440 -> "NmbP"  numberOfPaths
                             phKeyNumber -> 1315791474 -> "Nmbr"  number
                    phKeyNumberOfRipples -> 1315791442 -> "NmbR"  numberOfRipples
                   phKeyNumberOfSiblings -> 1315791443 -> "NmbS"  numberOfSiblings
                       phKeyNonImageData -> 1315850605 -> "NnIm"  nonImageData
                          phKeyNonLinear -> 1315851374 -> "NnLn"  nonLinear
                              phEnumNone -> 1315925605 -> "None"  none
                              phKeyNoise -> 1315926885 -> "Nose"  noise
                            phEnumNormal -> 1316121964 -> "Nrml"  normal
                        phEnumNormalPath -> 1316121936 -> "NrmP"  normalPath
                   phEnumNearestNeighbor -> 1316123508 -> "Nrst"  nearestNeighbor
                      phEnumNetscapeGray -> 1316177778 -> "NsGr"  netscapeGray
                           phEventNotify -> 1316251257 -> "Ntfy"  notify
                            phTypeNotify
                        phEventNotePaper -> 1316245618 -> "NtPr"  notePaper
                          phEnumNeutrals -> 1316254316 -> "Ntrl"  neutrals
                              phEnumNTSC -> 1314149187 -> "NTSC"  NTSC
                       phEventNTSCColors
                             phClassNull -> 1853189228 -> "null"  null
                              phEnumNull
                             phEventNull
                               phKeyNull
                             phKeyTarget
                              phTypeNull
           phEnumNavigatorPaletteOptions -> 1316382544 -> "NvgP"  navigatorPaletteOptions
                                phKeyNew -> 1316429856 -> "Nw  "  new
                           phEnumNewView -> 1316443767 -> "NwVw"  newView
                              phEnumNext -> 1316516896 -> "Nxt "  next
                             phEventNext
                   phTypeObjectReference -> 1868720672 -> "obj "  objectReference
                   phTypeObjectSpecifier
                            phTypeObject -> 1331849827 -> "Objc"  object
                         phKeyObjectName -> 1331849806 -> "ObjN"  objectName
                    phKeyOverridePrinter -> 1331851856 -> "ObrP"  overridePrinter
                      phEventOceanRipple -> 1331916370 -> "OcnR"  oceanRipple
                               phEnumOff -> 1332110880 -> "Off "  off
                           phClassOffset -> 1332114292 -> "Ofst"  offset
                           phEventOffset
                             phKeyOffset
                                phEnumOn -> 1332617248 -> "On  "  on
                                 phKeyOn
                      phEnum1BitPerPixel -> 1332626036 -> "OnBt"  1BitPerPixel
                             phTypeOnOff -> 1332629350 -> "OnOf"  onOff
                          phClassOpacity -> 1332765027 -> "Opac"  opacityClass
                            phEnumOpenAs -> 1332756851 -> "OpAs"  openAs
                            phKeyOpacity -> 1332765556 -> "Opct"  opacity
                             phEventOpen -> 1332768288 -> "Opn "  open
                          phKeyOptimized -> 1332769901 -> "Optm"  optimized
                           phTypeOrdinal -> 1332896878 -> "Ordn"  ordinal
                     phKeyOriginalHeader -> 1332897608 -> "OrgH"  originalHeader
                        phClassOuterGlow -> 1332889452 -> "OrGl"  outerGlow
                          phKeyOuterGlow
      phKeyOriginalTransmissionReference -> 1332897620 -> "OrgT"  originalTransmissionReference
                            phEnumOrange -> 1332899431 -> "Orng"  orange
                        phKeyOrientation -> 1332899444 -> "Ornt"  orientation
                       phTypeOrientation
                               phEnumOS2 -> 1330852384 -> "OS2 "  OS2
                     phEnumOutFromCenter -> 1333020274 -> "OtFr"  outFromCenter
                       phKeyOtherCursors -> 1333028931 -> "OthC"  otherCursors
                        phEnumOutOfGamut -> 1333022566 -> "OtOf"  outOfGamut
                             phKeyOutput -> 1333031028 -> "Otpt"  output
                        phEnumOuterBevel -> 1333031490 -> "OtrB"  outerBevel
                           phEnumOutside -> 1333031780 -> "Otsd"  outside
                          phEnumStampOut -> 1333097504 -> "Out "  stampOut
                       phEnumOutsetFrame -> 1333097542 -> "OutF"  outsetFrame
                    phKeyOverprintColors -> 1333162563 -> "OvrC"  overprintColors
                       phKeyOverrideSave -> 1333162596 -> "Ovrd"  overrideSave
                           phEnumOverlay -> 1333162604 -> "Ovrl"  overlay
                       phKeyOverrideOpen -> 1333162575 -> "OvrO"  overrideOpen
                            phEnumP22EBU -> 1345466946 -> "P22B"  P22EBU
                    phClassPathComponent -> 1348551533 -> "PaCm"  pathComponent
                     phEventPasteEffects -> 1348552280 -> "PaFX"  pasteEffects
                            phEventPaste -> 1885434740 -> "past"  paste
                             phClassPath -> 1348564072 -> "Path"  path
                               phKeyPath
                 phClassPatternStampTool -> 1348555884 -> "PaTl"  patternStampTool
                   phEnumPlaybackOptions -> 1348627279 -> "PbkO"  playbackOptions
                   phClassPaintbrushTool -> 1348621420 -> "PbTl"  paintbrushTool
                          phEnumPickCMYK -> 1348692803 -> "PckC"  pickCMYK
                          phEnumPickGray -> 1348692807 -> "PckG"  pickGray
                           phEnumPickHSB -> 1348692808 -> "PckH"  pickHSB
                           phKeyPickerID -> 1348692809 -> "PckI"  pickerID
                        phTypePickerKind -> 1348692811 -> "PckK"  pickerKindType
                           phEnumPickLab -> 1348692812 -> "PckL"  pickLab
                       phEnumPickOptions -> 1348692815 -> "PckO"  pickOptions
                         phKeyPickerKind -> 1348692850 -> "Pckr"  pickerKind
                           phEnumPickRGB -> 1348692818 -> "PckR"  pickRGB
                       phClassPencilTool -> 1348686956 -> "PcTl"  pencilTool
                 phClassPDFGenericFormat -> 1346651719 -> "PDFG"  PDFGenericFormat
                        phEnumPerceptual -> 1348825699 -> "Perc"  perceptual
                 phEnumPNGFilterAdaptive -> 1346847076 -> "PGAd"  PNGFilterAdaptive
                  phEnumPNGFilterAverage -> 1346847094 -> "PGAv"  PNGFilterAverage
                 phEnumPNGInterlaceAdam7 -> 1346849089 -> "PGIA"  PNGInterlaceAdam7
                  phEnumPNGInterlaceNone -> 1346849102 -> "PGIN"  PNGInterlaceNone
                   phKeyPNGInterlaceType -> 1346849108 -> "PGIT"  PNGInterlaceType
                  phTypePNGInterlaceType
                         phKeyPageNumber -> 1348947565 -> "PgNm"  pageNumber
                     phEnumPNGFilterNone -> 1346850415 -> "PGNo"  PNGFilterNone
                   phEnumPagePosCentered -> 1348948035 -> "PgPC"  pagePosCentered
                       phKeyPagePosition -> 1348948083 -> "PgPs"  pagePosition
                      phTypePagePosition
                    phEnumPNGFilterPaeth -> 1346850932 -> "PGPt"  PNGFilterPaeth
                      phEnumPNGFilterSub -> 1346851682 -> "PGSb"  PNGFilterSub
                        phClassPageSetup -> 1348948852 -> "PgSt"  pageSetup
                         phEnumPageSetup
                          phKeyPageSetup
                    phEnumPagePosTopLeft -> 1348949068 -> "PgTL"  pagePosTopLeft
                       phEnumPNGFilterUp -> 1346852208 -> "PGUp"  PNGFilterUp
               phClassPhotoshopDCSFormat -> 1349010481 -> "PhD1"  photoshopDCSFormat
              phClassPhotoshopDCS2Format -> 1349010482 -> "PhD2"  photoshopDCS2Format
                          phKeyPhosphors -> 1349022576 -> "Phsp"  phosphors
                         phTypePhosphors
                phClassPhotoshop20Format -> 1349022770 -> "Pht2"  photoshop20Format
                phClassPhotoshop35Format -> 1349022771 -> "Pht3"  photoshop35Format
                        phEventPhotocopy -> 1349022819 -> "Phtc"  photocopy
               phClassPhotoshopEPSFormat -> 1349022789 -> "PhtE"  photoshopEPSFormat
                   phEnumPhotoshopPicker -> 1349022827 -> "Phtk"  photoshopPicker
               phClassPhotoshopPDFFormat -> 1349022800 -> "PhtP"  photoshopPDFFormat
                   phClassPICTFileFormat -> 1346978630 -> "PICF"  PICTFileFormat
               phClassPICTResourceFormat -> 1346978642 -> "PICR"  PICTResourceFormat
                            phEventPlace -> 1349280544 -> "Plc "  placeEvent
                             phEnumPlace -> 1349280613 -> "Plce"  placeEnum
                      phEnumPillowEmboss -> 1349272930 -> "PlEb"  pillowEmboss
                       phKeyPluginFolder -> 1349281606 -> "PlgF"  pluginFolder
                          phClassPolygon -> 1349281646 -> "Plgn"  polygon
                      phClassPluginPrefs -> 1349281616 -> "PlgP"  pluginPicker
                      phEnumPluginPicker
                        phKeyPluginPrefs
     phEnumPluginsScratchDiskPreferences -> 1349281619 -> "PlgS"  pluginsScratchDiskPreferences
                            phEventPolar -> 1349284384 -> "Plr "  polar
                       phEnumPolarToRect -> 1349284434 -> "PlrR"  polarToRect
                          phEnumPalSecam -> 1349276515 -> "PlSc"  palSecam
                          phEventPlaster -> 1349284724 -> "Plst"  plaster
                      phEventPlasticWrap -> 1349284695 -> "PlsW"  plasticWrap
                            phKeyPalette -> 1349284896 -> "Plt "  palette
                           phKeyPlatform -> 1349284966 -> "Pltf"  platform
                          phTypePlatform
                        phKeyPaletteFile -> 1349284934 -> "PltF"  paletteFile
                     phEventPaletteKnife -> 1349284939 -> "PltK"  paletteKnife
               phKeySavePaletteLocations -> 1349284940 -> "PltL"  savePaletteLocations
                             phEventPlay -> 1349286176 -> "Ply "  play
                         phKeyPageFormat -> 1347252326 -> "PMpf"  pageFormat
                      phKeyPrintSettings -> 1347252339 -> "PMps"  printSettings
                            phEventPinch -> 1349411688 -> "Pnch"  pinch
                    phKeyPaintCursorKind -> 1349403467 -> "PnCK"  
                      phEnumPencilEraser -> 1349411692 -> "Pncl"  pencilEraser
                        phKeyPencilWidth
                       phEnumPondRipples -> 1349411922 -> "PndR"  pondRipples
                          phKeyPNGFilter -> 1347307366 -> "PNGf"  PNGFilter
                         phTypePNGFilter
                        phClassPNGFormat -> 1347307334 -> "PNGF"  PNGFormat
                            phClassPoint -> 1349415968 -> "Pnt "  paint
                          phClassPoint16 -> 1349415985 -> "Pnt1"  point16
                  phEnumPaintbrushEraser -> 1349416034 -> "Pntb"  paintbrushEraser
                    phKeyPaintingCursors -> 1349416003 -> "PntC"  paintingCursors
                       phEventPaintDaubs -> 1349416004 -> "PntD"  paintDaubs
                      phEventPointillize -> 1349416044 -> "Pntl"  pointillize
                          phKeyPaintType -> 1349416020 -> "PntT"  paintType
                        phEnumPanaVision -> 1349408371 -> "PnVs"  panaVision
                    phKeyPaperBrightness -> 1349546562 -> "PprB"  paperBrightness
                     phKeyPixelPaintSize -> 1347441530 -> "PPSz"  pixelPaintSize
                    phTypePixelPaintSize
                      phEnumPreciseMatte -> 1349665356 -> "PrBL"  preciseMatte
                           phEnumPrecise -> 1349673760 -> "Prc "  precise
                   phKeyPredefinedColors -> 1349674051 -> "PrdC"  predefinedColors
                      phKeyPreferBuiltin -> 1349674562 -> "PrfB"  preferBuiltin
                   phTypeProfileMismatch -> 1349674573 -> "PrfM"  profileMismatch
                        phKeyPreferences -> 1349674610 -> "Prfr"  preferences
                     phClassProfileSetup -> 1349674579 -> "PrfS"  profileSetup
                       phKeyProfileSetup
                 phEventProfileToProfile -> 1349674580 -> "PrfT"  profileToProfile
                            phEventPurge -> 1349674853 -> "Prge"  purge
                         phTypePurgeItem -> 1349674825 -> "PrgI"  purgeItem
                         phEnumPrimaries -> 1349675373 -> "Prim"  primaries
                        phKeyParentIndex -> 1349667182 -> "PrIn"  parentIndex
                 phEnumPrintingInksSetup -> 1349676617 -> "PrnI"  printingInksSetup
                         phKeyParentName -> 1349668461 -> "PrNm"  parentName
                         phEnumPrintSize -> 1349676627 -> "PrnS"  printSize
                            phEventPrint -> 1349676660 -> "Prnt"  print
                          phFormProperty -> 1886547824 -> "prop"  
                        phFormPropertyID
                            phEnumPurple -> 1349677088 -> "Prp "  purple
                         phClassProperty -> 1349677170 -> "Prpr"  property
                           phKeyPressure -> 1349677856 -> "Prs "  pressure
                 phKeyPreserveAdditional -> 1349677889 -> "PrsA"  preserveAdditional
                 phKeyPreserveLuminosity -> 1349677900 -> "PrsL"  preserveLuminosity
                       phEnumPerspective -> 1349677936 -> "Prsp"  perspective
                   phKeyPerspectiveIndex
               phKeyPreserveTransparency -> 1349677908 -> "PrsT"  preserveTransparency
                      phEnumPreviewBlack -> 1349678658 -> "PrvB"  previewBlack
                       phEnumPreviewCMYK -> 1349678659 -> "PrvC"  previewCMYKEnum
                    phKeyPreviewFullSize -> 1349678662 -> "PrvF"  previewFullSize
                        phKeyPreviewIcon -> 1349678665 -> "PrvI"  previewIcon
                        phKeyPreviewCMYK -> 1349678667 -> "PrvK"  previewCMYK
                    phEnumPreviewMagenta -> 1349678669 -> "PrvM"  previewMacThumbnail
                phKeyPreviewMacThumbnail
                        phEnumPreviewCMY -> 1349678670 -> "PrvN"  previewCMY
                        phEnumPreviewOff -> 1349678671 -> "PrvO"  previewOff
                      phKeyPreviewsQuery -> 1349678673 -> "PrvQ"  previewsQuery
                          phEnumPrevious -> 1349678707 -> "Prvs"  previous
                         phEventPrevious
                      phKeyProvinceState -> 1349678675 -> "PrvS"  provinceState
                       phTypePreviewCMYK -> 1349678708 -> "Prvt"  previewCMYKType
                            phKeyPreview -> 1349678711 -> "Prvw"  preview
                           phTypePreview
                phKeyPreviewWinThumbnail -> 1349678679 -> "PrvW"  previewWinThumbnail
                       phEnumPreviewCyan -> 1349678713 -> "Prvy"  previewCyan
                     phEnumPreviewYellow -> 1349678681 -> "PrvY"  previewYellow
                      phEventPosterEdges -> 1349743685 -> "PstE"  posterEdges
                        phEventPasteInto -> 1349743689 -> "PstI"  pasteInto
                           phKeyPosition -> 1349743726 -> "Pstn"  position
                     phEventPasteOutside -> 1349743695 -> "PstO"  pasteOutside
                        phClassPosterize -> 1349743730 -> "Pstr"  posterization
                        phEventPosterize
                      phKeyPosterization
                    phKeyPostScriptColor -> 1349743699 -> "PstS"  postScriptColor
                        phEventPatchwork -> 1349804904 -> "Ptch"  patchwork
                              phTypePath -> 1349806112 -> "Pth "  
                       phKeyPathContents -> 1349806147 -> "PthC"  pathContents
                          phTypePathKind -> 1349806155 -> "PthK"  pathKind
                           phKeyPathName -> 1349806158 -> "PthN"  pathName
                        phClassPathPoint -> 1349806192 -> "Pthp"  pathPoint
               phEnumPathsPaletteOptions -> 1349806160 -> "PthP"  pathsPaletteOptions
                     phEnumPatternDither -> 1349807684 -> "PtnD"  patternDither
                           phEnumPattern -> 1349808750 -> "Ptrn"  pattern
                             phKeyPoints -> 1349808928 -> "Pts "  points
                            phKeyPattern -> 1349809262 -> "Pttn"  patternKey
                          phClassPattern -> 1349809234 -> "PttR"  
                            phClassPixel -> 1350067564 -> "Pxel"  pixel
                 phClassPixelPaintFormat -> 1350069328 -> "PxlP"  pixelPaintFormat
                   phEnumPixelPaintSize1 -> 1350062897 -> "PxS1"  pixelPaintSize1
                   phEnumPixelPaintSize2 -> 1350062898 -> "PxS2"  pixelPaintSize2
                   phEnumPixelPaintSize3 -> 1350062899 -> "PxS3"  pixelPaintSize3
                   phEnumPixelPaintSize4 -> 1350062900 -> "PxS4"  pixelPaintSize4
                          phEnumPyramids -> 1350136429 -> "Pyrm"  pyramids
                        phEnumQCSCorner0 -> 1365472048 -> "Qcs0"  QCSCorner0
                        phEnumQCSCorner1 -> 1365472049 -> "Qcs1"  QCSCorner1
                        phEnumQCSCorner2 -> 1365472050 -> "Qcs2"  QCSCorner2
                        phEnumQCSCorner3 -> 1365472051 -> "Qcs3"  QCSCorner3
                          phEnumQCSSide0 -> 1365472052 -> "Qcs4"  QCSSide0
                          phEnumQCSSide1 -> 1365472053 -> "Qcs5"  QCSSide1
                          phEnumQCSSide2 -> 1365472054 -> "Qcs6"  QCSSide2
                          phEnumQCSSide3 -> 1365472055 -> "Qcs7"  QCSSide3
                        phEnumQCSAverage -> 1365472097 -> "Qcsa"  QCSAverage
                    phEnumQCSIndependent -> 1365472105 -> "Qcsi"  QCSIndependent
                   phTypeQuadCenterState -> 1363366772 -> "QCSt"  quadCenterState
                          phEnumQuadtone -> 1365537902 -> "Qdtn"  quadtone
                            phKeyQuality -> 1366062201 -> "Qlty"  quality
                           phTypeQuality
                          phKeyQuickMask -> 1366647629 -> "QucM"  quickMask
                             phEventQuit -> 1903520116 -> "quit"  quit
                       phEnumQueryAlways -> 1366651457 -> "QurA"  queryAlways
                          phEnumQueryAsk -> 1366651500 -> "Qurl"  queryAsk
                        phEnumQueryNever -> 1366651470 -> "QurN"  queryNever
                        phTypeQueryState -> 1366651475 -> "QurS"  queryState
                            phClassRange -> 1382116967 -> "Rang"  range
                        phKeyRecentFiles -> 1382248038 -> "Rcnf"  recentFiles
                           phClassRect16 -> 1382249521 -> "Rct1"  rect16
                        phClassRectangle -> 1382249582 -> "Rctn"  rectangle
                       phEnumRectToPolar -> 1382249552 -> "RctP"  rectToPolar
                               phEnumRed -> 1382293536 -> "Rd  "  red
                                phKeyRed
                      phKeyRedBlackPoint -> 1382302316 -> "RdBl"  redBlackPoint
                    phEnumRedrawComplete -> 1382302573 -> "RdCm"  redrawComplete
                           phKeyRedGamma -> 1382303597 -> "RdGm"  redGamma
                            phEnumRadial -> 1382312992 -> "Rdl "  radial
                       phEventRadialBlur -> 1382313026 -> "RdlB"  radialBlur
                              phEnumReds -> 1382314784 -> "Rds "  radius
                             phKeyRadius
                      phKeyRedWhitePoint -> 1382307688 -> "RdWh"  redWhitePoint
                               phKeyRedX -> 1382307872 -> "RdX "  redX
                               phKeyRedY -> 1382308128 -> "RdY "  redY
                            phFormOffset -> 1919249509 -> "rele"  
                  phFormRelativePosition
                     phKeyRenderFidelity -> 1382443364 -> "Rfid"  renderFidelity
                         phEnumReflected -> 1382444131 -> "Rflc"  reflected
                               phEnumRGB -> 1380401696 -> "RGB "  RGB
                         phClassRGBColor -> 1380401731 -> "RGBC"  RGBColor
                          phEnumRGBColor
                             phEnumRGB48 -> 1380401734 -> "RGBF"  RGB48
                     phClassRGBColorMode -> 1380401741 -> "RGBM"  RGBColorMode
                           phKeyRGBSetup -> 1380401747 -> "RGBS"  RGBSetup
                    phTypeRGBSetupSource
                         phClassRGBSetup -> 1380401780 -> "RGBt"  RGBSetupClass
                     phEventRoughPastels -> 1382508624 -> "RghP"  roughPastels
                             phEnumRight -> 1382508660 -> "Rght"  right
                              phKeyRight
                  phKeyRegistrationMarks -> 1382511437 -> "RgsM"  registrationMarks
                             phKeyRelief -> 1382835744 -> "Rlf "  relief
                       phKeyRulerOriginH -> 1382838856 -> "RlrH"  rulerOriginH
                         phKeyRulerUnits -> 1382838869 -> "RlrU"  rulerUnits
                        phTypeRulerUnits
                       phKeyRulerOriginV -> 1382838870 -> "RlrV"  rulerOriginV
                          phEnumRelative -> 1382839414 -> "Rltv"  relative
                           phKeyRelative
                 phEventRemoveBlackMatte -> 1382905410 -> "RmvB"  removeBlackMatte
                  phEventRemoveLayerMask -> 1382905420 -> "RmvL"  removeLayerMask
                 phEventRemoveWhiteMatte -> 1382905431 -> "RmvW"  removeWhiteMatte
                             phEnumRound -> 1382966304 -> "Rnd "  round
                            phEnumRandom -> 1382966381 -> "Rndm"  random
                          phKeyRoundness -> 1382966382 -> "Rndn"  roundness
                         phKeyRandomSeed -> 1382966355 -> "RndS"  randomSeed
                           phEventRename -> 1382968608 -> "Rnm "  rename
                     phEventReplaceColor -> 1383099459 -> "RplC"  replaceColor
                           phEventRipple -> 1383099493 -> "Rple"  ripple
                    phKeyRippleMagnitude -> 1383099469 -> "RplM"  rippleMagnitude
                         phKeyRippleSize -> 1383099475 -> "RplS"  rippleSize
                        phTypeRippleSize
                            phEnumRepeat -> 1383101472 -> "Rpt "  repeat
                  phEnumRepeatEdgePixels -> 1383101509 -> "RptE"  repeatEdgePixels
                           phEnumRulerCm -> 1383220077 -> "RrCm"  rulerCm
                       phEnumRulerInches -> 1383221614 -> "RrIn"  rulerInches
                        phEnumRulerPicas -> 1383223401 -> "RrPi"  rulerPicas
                      phEnumRulerPercent -> 1383223410 -> "RrPr"  rulerPercent
                       phEnumRulerPoints -> 1383223412 -> "RrPt"  rulerPoints
                       phEnumRulerPixels -> 1383223416 -> "RrPx"  rulerPixels
                            phEventReset -> 1383294324 -> "Rset"  reset
                         phKeyResolution -> 1383296116 -> "Rslt"  resolution
                           phKeyResample -> 1383296368 -> "Rsmp"  resample
                           phKeyResponse -> 1383297134 -> "Rspn"  response
                         phKeyResourceID -> 1383297609 -> "RsrI"  resourceID
                        phEventRasterize -> 1383298162 -> "Rstr"  rasterize
               phEventRasterizeTypeSheet -> 1383298132 -> "RstT"  rasterizeTypeLayer
                              phKeyRatio -> 1383342112 -> "Rt  "  ratio
                     phEventReticulation -> 1383359340 -> "Rtcl"  reticulation
                       phKeyRetainHeader -> 1383362120 -> "RtnH"  retainHeader
            phEnumRotoscopingPreferences -> 1383363408 -> "RtsP"  rotoscopingPreferences
                             phKeyRotate -> 1383363616 -> "Rtt "  rotate
                            phEnumRotate -> 1383363685 -> "Rtte"  rotateEventEnum
                           phEventRotate
                         phEnumRevealAll -> 1383492673 -> "RvlA"  revealAll
                   phEnumRevealSelection -> 1383492691 -> "RvlS"  revealSelection
                            phKeyReverse -> 1383494259 -> "Rvrs"  reverse
                            phEnumRevert -> 1383494260 -> "Rvrt"  revert
                           phEventRevert
                        phClassRawFormat -> 1383538720 -> "Rw  "  rawFormat
                phKeyResizeWindowsOnZoom -> 1381453658 -> "RWOZ"  resizeWindowsOnZoom
                             phEventSave -> 1935767141 -> "save"  save
             phEnumSmartBlurModeEdgeOnly -> 1396854085 -> "SBME"  smartBlurModeEdgeOnly
               phEnumSmartBlurModeNormal -> 1396854094 -> "SBMN"  smartBlurModeNormal
          phEnumSmartBlurModeOverlayEdge -> 1396854095 -> "SBMO"  smartBlurModeOverlayEdge
                          phClassSubPath -> 1398960236 -> "Sbpl"  subpathsList
                        phKeySubPathList -> 1398960204 -> "SbpL"  subpathListKey
              phEnumSmartBlurQualityHigh -> 1396855112 -> "SBQH"  smartBlurQualityHigh
               phEnumSmartBlurQualityLow -> 1396855116 -> "SBQL"  smartBlurQualityLow
            phEnumSmartBlurQualityMedium -> 1396855117 -> "SBQM"  smartBlurQualityMedium
                     phEventSubtractFrom -> 1398961222 -> "SbtF"  subtractFrom
                          phEnumSubtract -> 1398961266 -> "Sbtr"  subtract
                         phEventSubtract
                 phClassSpotColorChannel -> 1396925288 -> "SCch"  spotColorChannel
                             phEnumScale -> 1399024672 -> "Scl "  scale
                              phKeyScale
                    phKeyScaleHorizontal -> 1399024712 -> "SclH"  scaleHorizontal
                            phKeyScaling -> 1399024750 -> "Scln"  scaling
                        phEnumSolidColor -> 1396927602 -> "SClr"  solidColor
                      phKeyScaleVertical -> 1399024726 -> "SclV"  scaleVertical
                              phKeyScans -> 1399025267 -> "Scns"  scans
                      phEnumScreenCircle -> 1399026243 -> "ScrC"  screenCircle
                         phEnumScreenDot -> 1399026244 -> "ScrD"  scratchDisks
                       phKeyScratchDisks
                         phKeyScreenFile -> 1399026246 -> "ScrF"  screenFile
                        phEnumScreenLine -> 1399026252 -> "ScrL"  screenLine
                            phEnumScreen -> 1399026286 -> "Scrn"  screen
                         phKeyFontScript -> 1399026288 -> "Scrp"  fontScript
                         phKeyScreenType -> 1399026260 -> "ScrT"  screenType
                        phTypeScreenType
                   phClassScitexCTFormat -> 1399026808 -> "Sctx"  scitexCTFormat
               phEnumStrokeDirHorizontal -> 1396983930 -> "SDHz"  strokeDirHorizontal
                    phKeyStrokeDirection -> 1396992370 -> "SDir"  strokeDirection
                 phEnumStrokeDirLeftDiag -> 1396984900 -> "SDLD"  strokeDirLeftDiag
                phEnumStrokeDirRightDiag -> 1396986436 -> "SDRD"  strokeDirRightDiag
                 phEnumStrokeDirVertical -> 1396987508 -> "SDVt"  strokeDirVertical
                        phKeyShadowColor -> 1935963971 -> "sdwC"  shadowColor
                         phKeyShadowMode -> 1935963981 -> "sdwM"  shadowMode
                      phKeyShadowOpacity -> 1935963983 -> "sdwO"  shadowOpacity
                         phEnumSelective -> 1399155813 -> "Sele"  selective
                              phEventSet -> 1936028772 -> "setd"  set
             phClassBackgroundEraserTool -> 1397052524 -> "SETl"  backgroundEraserTool
                         phEnumSoftMatte -> 1399210572 -> "SfBL"  softMatte
                         phEnumSoftLight -> 1399223372 -> "SftL"  softLight
                           phKeySoftness -> 1399223406 -> "Sftn"  softness
                   phKeyShadingIntensity -> 1399350345 -> "ShdI"  shadingIntensity
                    phKeyShadowIntensity
                       phKeyShadowLevels -> 1399350348 -> "ShdL"  shadowLevels
                       phKeyShadingNoise -> 1399350350 -> "ShdN"  shadingNoise
                       phKeyShadingShape -> 1399350355 -> "ShdS"  shadingShape
                           phEnumShadows -> 1399350391 -> "Shdw"  shadows
                           phKeyShiftKey -> 1399350859 -> "ShfK"  shiftKey
                 phKeyShiftKeyToolSwitch -> 1399343956 -> "ShKT"  shiftKeyToolSwitch
                              phKeyShape -> 1399353376 -> "Shp "  shape
                             phTypeShape
                     phClassShapingCurve -> 1399353411 -> "ShpC"  shapeCurveType
                        phKeyContourType
                            phEventShear -> 1399353888 -> "Shr "  shear
                     phEventSharpenEdges -> 1399353925 -> "ShrE"  sharpenEdges
                            phKeyShearEd
                        phEnumShortLines -> 1399353932 -> "ShrL"  shortLines
                      phEventSharpenMore -> 1399353933 -> "ShrM"  sharpenMore
                         phKeyShortNames -> 1399353934 -> "ShrN"  shortNames
                          phEventSharpen -> 1399353968 -> "Shrp"  sharpen
                          phKeySharpness
                        phKeyShearPoints -> 1399353936 -> "ShrP"  shearPoints
                            phKeyShearSt -> 1399353939 -> "ShrS"  shearSt
                      phEnumShortStrokes -> 1399346036 -> "ShSt"  shortStrokes
                      phClassSharpenTool -> 1399346284 -> "ShTl"  sharpenTool
                   phKeyShowTransparency -> 1399346290 -> "ShTr"  showTransparency
                             phEventShow -> 1399355168 -> "Shw "  show
               phKeyShowEnglishFontNames -> 1399355205 -> "ShwE"  showEnglishFontNames
                       phKeyShowToolTips -> 1399355220 -> "ShwT"  showToolTips
                              phEnumSkew -> 1399547255 -> "Skew"  skew
                               phKeySkew
                     phEnumSelectedAreas -> 1399612225 -> "SlcA"  selectedAreas
                   phClassSelectiveColor -> 1399612227 -> "SlcC"  selectiveColor
                   phEventSelectiveColor
                           phEventSelect -> 1936483188 -> "slct"  select
                         phEnumSelection -> 1399612276 -> "Slct"  selectionEnum
                   phEnumSlopeLimitMatte -> 1399614836 -> "Slmt"  slopeLimitMatte
                         phEventSolarize -> 1399616122 -> "Slrz"  solarize
                      phEnumStylesAppend -> 1399616321 -> "SlsA"  stylesAppend
                        phEnumStylesLoad -> 1399616356 -> "Slsd"  stylesLoad
                      phEnumStylesDelete -> 1399616358 -> "Slsf"  stylesDelete
                         phEnumStylesNew -> 1399616334 -> "SlsN"  stylesNew
                       phEnumStylesReset -> 1399616338 -> "SlsR"  stylesReset
                        phEnumStylesSave -> 1399616374 -> "Slsv"  stylesSave
                      phKeySmartBlurMode -> 1399669325 -> "SmBM"  smartBlurMode
                     phTypeSmartBlurMode
                   phKeySmartBlurQuality -> 1399669329 -> "SmBQ"  smartBlurQuality
                  phTypeSmartBlurQuality
                      phEventSmudgeStick -> 1399678035 -> "SmdS"  smudgeStick
                            phEventSumie -> 1399679333 -> "Smie"  sumie
                             phEnumSmall -> 1399680032 -> "Sml "  small
                          phEventSimilar -> 1399680114 -> "Smlr"  similar
                             phKeySmooth -> 1399680879 -> "Smoo"  smooth
                         phEnumSample3x3 -> 1399681075 -> "Smp3"  sample3x3
                         phEnumSample5x5 -> 1399681077 -> "Smp5"  sample5x5
                            phEnumSMPTEC -> 1397575747 -> "SMPC"  SMPTEC
                       phEnumSamplePoint -> 1399681104 -> "SmpP"  samplePoint
                      phEnumAdobeRGB1998 -> 1397575764 -> "SMPT"  adobeRGB1998
                        phEventSmartBlur -> 1399681602 -> "SmrB"  smartBlur
                           phEventSmooth -> 1399682152 -> "Smth"  smoothness
                         phKeySmoothness
                       phClassSmudgeTool -> 1399673964 -> "SmTl"  smudgeTool
                     phClassSingleColumn -> 1399744355 -> "Sngc"  singleColumn
                        phClassSingleRow -> 1399744370 -> "Sngr"  singleRow
                    phKeySnapshotInitial -> 1399746633 -> "SnpI"  snapshotInitial
                          phEnumSnapshot -> 1399746675 -> "Snps"  snapshotEnum
                         phClassSnapshot -> 1399746643 -> "SnpS"  snapshotClass
                        phClassSolidFill -> 1399801449 -> "SoFi"  solidFill
                          phKeySolidFill
                     phEnumContourLinear -> 1936732209 -> "sp01"  shapeCurveLinear
                   phEnumContourGaussian -> 1936732210 -> "sp02"  shapeCurveGaussian
                     phEnumContourSingle -> 1936732211 -> "sp03"  shapeCurveSingle
                     phEnumContourDouble -> 1936732212 -> "sp04"  shapeCurveDouble
                     phEnumContourTriple -> 1936732213 -> "sp05"  shapeCurveTriple
                     phEnumContourCustom -> 1936732214 -> "sp06"  shapeCurveCustom
                phKeySpecialInstructions -> 1399874377 -> "SpcI"  specialInstructions
                            phKeySpacing -> 1399874414 -> "Spcn"  spacing
                          phEnumSpectrum -> 1399874420 -> "Spct"  spectrum
                       phKeySpherizeMode -> 1399875661 -> "SphM"  spherizeMode
                      phTypeSpherizeMode
                         phEventSpherize -> 1399875698 -> "Sphr"  spherize
                    phEventSplitChannels -> 1399876675 -> "SplC"  splitChannels
             phKeySupplementalCategories
                              phEnumSpin -> 1399877152 -> "Spn "  spin
                           phEventSponge -> 1399877223 -> "Spng"  sponge
                         phEnumSpotColor -> 1399877492 -> "Spot"  spot
                               phKeySpot
                        phKeySprayRadius -> 1399878226 -> "SprR"  sprayRadius
                   phEnumSeparationSetup -> 1399878227 -> "SprS"  separationSetup
                   phEventSprayedStrokes
                        phKeySeparations -> 1399878260 -> "Sprt"  separations
                  phEnumSeparationTables -> 1399878228 -> "SprT"  separationTables
                          phEventSpatter -> 1399878688 -> "Spt "  spatter
                            phEnumSquare -> 1399943712 -> "Sqr "  square
                         phKeySquareSize -> 1399943763 -> "SqrS"  squareSize
                            phKeySource2 -> 1400005426 -> "Src2"  source2
                        phKeySrcBlackMin -> 1400005442 -> "SrcB"  srcBlackMin
                        phEnumCenterGlow -> 1400005443 -> "SrcC"  centerGlow
                             phKeySource -> 1400005477 -> "Srce"  source
                          phEnumEdgeGlow -> 1400005445 -> "SrcE"  edgeGlow
                        phKeySrcBlackMax -> 1400005484 -> "Srcl"  srcBlackMax
                        phKeySrcWhiteMax -> 1400005485 -> "Srcm"  srcWhiteMax
                         phKeySourceMode -> 1400005453 -> "SrcM"  sourceMode
                        phKeySrcWhiteMin -> 1400005463 -> "SrcW"  srcWhiteMin
                              phEnumSRGB -> 1397901122 -> "SRGB"  sRGB
                           phKeyStrength -> 1936877416 -> "srgh"  strength
                      phKeyStrengthRatio -> 1936877394 -> "srgR"  strengthRatio
                       phKeySerialString -> 1400007763 -> "SrlS"  serialString
                   phClassSaturationTool -> 1400001644 -> "SrTl"  saturationTool
                         phKeySystemInfo -> 1400075337 -> "SstI"  systemInfo
                      phKeySystemPalette -> 1400075344 -> "SstP"  systemPalette
                          phEnumStandard -> 1400136736 -> "Std "  standard
                              phEnumStdA -> 1400136769 -> "StdA"  stdA
                              phEnumStdB -> 1400136770 -> "StdB"  stdB
                              phEnumStdC -> 1400136771 -> "StdC"  stdC
                              phEnumStdE -> 1400136773 -> "StdE"  stdE
                       phKeyStrokeDetail -> 1400128628 -> "StDt"  strokeDetail
                           phEnumStagger -> 1400137586 -> "Stgr"  stagger
                      phKeyStylusIsColor -> 1400138819 -> "StlC"  stylusIsColor
                    phKeyStylusIsOpacity -> 1400138831 -> "StlO"  stylusIsOpacity
                   phKeyStylusIsPressure -> 1400138832 -> "StlP"  stylusIsPressure
                       phKeyStylusIsSize -> 1400138835 -> "StlS"  stylusIsSize
                            phEventStamp -> 1400139120 -> "Stmp"  stamp
                     phEventStainedGlass -> 1400139335 -> "StnG"  stainedGlass
                             phEventStop -> 1400139632 -> "Stop"  stop
                          phEnumSaturate -> 1400140320 -> "Str "  saturate
                     phKeyStartArrowhead -> 1400140353 -> "StrA"  startArrowhead
                   phTypeStrokeDirection -> 1400140356 -> "StrD"  strokeDirectionType
                      phEnumStretchToFit -> 1400140358 -> "StrF"  stretchToFit
                    phKeyStrength_PLUGIN -> 1400140391 -> "Strg"  strengthPlugin
                           phEventStroke -> 1400140395 -> "Strk"  stroke
                       phKeyStrokeLength -> 1400140364 -> "StrL"  strokeLength
                    phTypeStrokeLocation
                     phKeyStrokePressure -> 1400140368 -> "StrP"  strokePressure
                         phKeyStrokeSize -> 1400140371 -> "StrS"  strokeSize
                        phEnumSaturation -> 1400140404 -> "Strt"  saturation
                         phKeySaturation
                              phKeyStart
                        phKeyStrokeWidth -> 1400140375 -> "StrW"  strokeWidth
                              phKeyState -> 1400140901 -> "Stte"  state
                             phTypeState
                            phClassStyle -> 1400142147 -> "StyC"  styleClass
                              phKeyStyle -> 1400142188 -> "Styl"  style
                             phKeyStyles -> 1400142195 -> "Stys"  styles
                       phKeySaveAndClose -> 1400258926 -> "SvAn"  saveAndClose
                      phKeySaveComposite -> 1400259437 -> "SvCm"  saveComposite
                             phEnumSaved -> 1400268132 -> "Sved"  saved
                        phEnumSaveForWeb -> 1400268407 -> "Svfw"  saveForWeb
            phEnumSavingFilesPreferences -> 1400270406 -> "SvnF"  savingFilesPreferences
                             phKeySaving -> 1400270439 -> "Svng"  saving
                          phKeySavePaths -> 1400262772 -> "SvPt"  savePaths
                       phKeySavePyramids -> 1400262777 -> "SvPy"  savePyramids
                    phEnumSwatchesAppend -> 1400337473 -> "SwtA"  swatchesAppend
                   phEnumSwatchesReplace -> 1400337520 -> "Swtp"  swatchesReplace
                     phEnumSwatchesReset -> 1400337490 -> "SwtR"  swatchesReset
                      phEnumSwatchesSave -> 1400337491 -> "SwtS"  swatchesSave
                      phEnumSystemPicker -> 1400468304 -> "SysP"  systemPicker
                            phKeySizeKey -> 1400512544 -> "Sz  "  size
                            phKey_Source -> 1411391520 -> "T   "  to
                                 phKeyTo
                            phEnumTables -> 1415736352 -> "Tbl "  tables
                          phKeyToBuiltin -> 1413639200 -> "TBl "  toBuiltin
                      phEvent3DTransform -> 1415861280 -> "TdT "  3DTransform
                           phTypeRawData -> 1952740449 -> "tdta"  rawData
                              phTypeChar -> 1413830740 -> "TEXT"  char
                              phTypeText
                phEnumToggleBlackPreview -> 1416053328 -> "TgBP"  toggleBlackPreview
                  phEnumToggleCMYPreview -> 1416053581 -> "TgCM"  toggleCMYPreview
                 phEnumToggleCyanPreview -> 1416053584 -> "TgCP"  toggleCyanPreview
                        phEnumToggleGrid -> 1416054642 -> "TgGr"  toggleGrid
              phEnumToggleActionsPalette -> 1416064065 -> "TglA"  toggleActionsPalette
              phEnumToggleBrushesPalette -> 1416064066 -> "TglB"  toggleBrushesPalette
                phEnumToggleColorPalette -> 1416064099 -> "Tglc"  toggleColorPalette
                 phEnumToggleCMYKPreview -> 1416064067 -> "TglC"  toggleCMYKPreview
                      phEnumToggleGuides -> 1416064100 -> "Tgld"  toggleGuides
                       phEnumToggleEdges -> 1416064069 -> "TglE"  toggleEdges
                phEnumToggleGamutWarning -> 1416064071 -> "TglG"  toggleGamutWarning
             phEnumToggleChannelsPalette -> 1416064104 -> "Tglh"  toggleChannelsPalette
              phEnumToggleHistoryPalette -> 1416064072 -> "TglH"  toggleHistoryPalette
                 phEnumToggleInfoPalette -> 1416064073 -> "TglI"  toggleInfoPalette
                  phEnumToggleLockGuides -> 1416064076 -> "TglL"  toggleLockGuides
                   phEnumToggleLayerMask -> 1416064077 -> "TglM"  toggleLayerMask
            phEnumToggleNavigatorPalette -> 1416064078 -> "TglN"  toggleNavigatorPalette
              phEnumToggleOptionsPalette -> 1416064079 -> "TglO"  toggleOptionsPalette
                       phKeyToggleOthers
                       phEnumTogglePaths -> 1416064080 -> "TglP"  togglePaths
                      phEnumToggleRulers -> 1416064082 -> "TglR"  toggleRulers
                   phEnumToggleStatusBar -> 1416064115 -> "Tgls"  toggleStatusBar
                phEnumToggleSnapToGuides -> 1416064083 -> "TglS"  toggleSnapToGuides
                phEnumTogglePathsPalette -> 1416064116 -> "Tglt"  togglePathsPalette
                phEnumToggleToolsPalette -> 1416064084 -> "TglT"  toggleToolsPalette
             phEnumToggleSwatchesPalette -> 1416064119 -> "Tglw"  toggleSwatchesPalette
               phEnumToggleLayersPalette -> 1416064121 -> "Tgly"  toggleLayersPalette
              phEnumToggleMagentaPreview -> 1416056144 -> "TgMP"  toggleMagentaPreview
               phEnumToggleStylesPalette -> 1416057708 -> "TgSl"  toggleStylesPalette
                  phEnumToggleSnapToGrid -> 1416057710 -> "TgSn"  toggleSnapToGrid
               phEnumToggleYellowPreview -> 1416059216 -> "TgYP"  toggleYellowPreview
                         phEnumThumbnail -> 1416129890 -> "Thmb"  thumbnail
                         phEnumThreshold -> 1416131176 -> "Thrh"  thresholdEnum
                        phClassThreshold -> 1416131187 -> "Thrs"  thresholdClassEvent
                        phEventThreshold
                          phKeyThreshold -> 1416131432 -> "Thsh"  threshold
                       phClassTIFFFormat -> 1414088262 -> "TIFF"  TIFF
                              phEnumTIFF
                              phEnumTile -> 1416195173 -> "Tile"  tile
               phEventTakeMergedSnapshot -> 1416318322 -> "TkMr"  takeMergedSnapshot
                     phEventTakeSnapshot -> 1416319854 -> "TkSn"  takeSnapshot
                       phEnumTile_PLUGIN -> 1416372256 -> "Tl  "  tilePlugin
                         phKeyTileNumber -> 1416384109 -> "TlNm"  tileNumber
                         phKeyTileOffset -> 1416384358 -> "TlOf"  tileOffset
                          phKeyTolerance -> 1416393326 -> "Tlrn"  tolerance
                            phEventTiles -> 1416393504 -> "Tls "  tiles
                           phKeyTileSize -> 1416385402 -> "TlSz"  tileSize
                             phKeyToMode -> 1414358048 -> "TMd "  toMode
                           phKeyToLinked -> 1416580203 -> "ToLk"  toLinked
                             phClassTool -> 1416589164 -> "Tool"  tool
                               phEnumTop -> 1416589344 -> "Top "  top
                                phKeyTop
                             phEventTrap -> 1416782192 -> "Trap"  trap
                     phEventTraceContour -> 1416782659 -> "TrcC"  traceContour
                           phKeyTracking -> 1416782699 -> "Trck"  tracking
                     phClassTransferSpec -> 1416783472 -> "Trfp"  transferSpecClass
                      phClassTargaFormat -> 1416783686 -> "TrgF"  targaFormat
                        phEnumTargetPath -> 1416783728 -> "Trgp"  targetPath
                         phKeyTargetPath
                    phKeyTargetPathIndex -> 1416783696 -> "TrgP"  targetPathIndex
                            phEnumTarget -> 1416783732 -> "Trgt"  targetEnum
               phEnumToggleRGBMacPreview -> 1416777072 -> "TrMp"  toggleRGBMacPreview
             phKeyTransparencyGridColors -> 1416785475 -> "TrnC"  transparencyGridColors
                        phEventTornEdges -> 1416785477 -> "TrnE"  tornEdges
                        phEventTransform -> 1416785510 -> "Trnf"  transform
                   phKeyTransferFunction -> 1416785478 -> "TrnF"  transferFunction
      phEnumTransparencyGamutPreferences -> 1416785479 -> "TrnG"  transparencyGamutPreferences
                   phKeyTransparencyGrid
               phKeyTransparencyGridSize
              phTypeTransparencyGridSize
                   phKeyTransparentIndex -> 1416785481 -> "TrnI"  transparentIndex
            phTypeTransparencyGridColors -> 1416785516 -> "Trnl"  transparencyGridColorsType
                phClassTransparencyPrefs -> 1416785488 -> "TrnP"  transparencyPrefs
                  phKeyTransparencyPrefs
                       phEnumTransparent -> 1416785523 -> "Trns"  transparency
                       phKeyTransparency
                 phClassTransparencyStop -> 1416785491 -> "TrnS"  transferSpec
                       phKeyTransferSpec
                  phKeyTransparencyShape
                         phEnumTrinitron -> 1416785524 -> "Trnt"  trinitron
                  phKeyTransparentWhites -> 1416785495 -> "TrnW"  transparentWhites
                      phEnumTransparency -> 1416786800 -> "Trsp"  transparencyEnum
                           phEnumTritone -> 1416787054 -> "Trtn"  tritone
     phEnumToggleRGBUncompensatedPreview -> 1416779120 -> "TrUp"  toggleRGBUncompensatedPreview
           phEnumToggleRGBWindowsPreview -> 1416779632 -> "TrWp"  toggleRGBWindowsPreview
                              phKeyTitle -> 1416916000 -> "Ttl "  title
                         phKeyTotalLimit -> 1416916044 -> "TtlL"  totalLimit
                            phEventTwirl -> 1417114220 -> "Twrl"  twirl
                              phKeyTwist -> 1417114484 -> "Twst"  twist
                     phEnumTexTypeBlocks -> 1417167468 -> "TxBl"  texTypeBlocks
                      phEnumTexTypeBrick -> 1417167474 -> "TxBr"  texTypeBrick
                     phEnumTexTypeBurlap -> 1417167477 -> "TxBu"  texTypeBurlap
                     phEnumTexTypeCanvas -> 1417167713 -> "TxCa"  texTypeCanvas
                    phEnumTexTypeFrosted -> 1417168498 -> "TxFr"  texTypeFrosted
                        phClassTextLayer -> 1417170034 -> "TxLr"  textLayer
                phClassObsoleteTextLayer -> 1417170041 -> "TxLy"  obsoleteTextLayer
                  phEnumTexTypeSandstone -> 1417171828 -> "TxSt"  texTypeSandstone
                               phKeyText -> 1417180192 -> "Txt "  textKey
                     phKeyTextClickPoint -> 1417180227 -> "TxtC"  textClickPoint
                    phKeyTextureCoverage
                           phKeyTextData -> 1417180228 -> "TxtD"  textData
                      phEventTextureFill -> 1417180230 -> "TxtF"  textureFile
                        phKeyTextureFile
                   phEnumTexTypeTinyLens -> 1417172044 -> "TxTL"  texTypeTinyLens
                            phKeyTexture -> 1417180274 -> "Txtr"  texture
                        phClassTextStyle -> 1417180243 -> "TxtS"  textStyle
                          phKeyTextStyle
                   phClassTextStyleRange -> 1417180276 -> "Txtt"  textStyleRange
                     phKeyTextStyleRange
                        phKeyTextureType -> 1417180244 -> "TxtT"  textureType
                       phTypeTextureType
                       phEventTexturizer -> 1417180282 -> "Txtz"  texturizer
                             phTypeClass -> 1954115685 -> "type"  class
                              phTypeType
                               phKeyType -> 1417244773 -> "Type"  type
                          phEnumUIBitmap -> 1430418541 -> "UBtm"  uIBitmap
                                phKeyUCA -> 1430462496 -> "UC  "  UCA
                            phEnumUICMYK -> 1430474073 -> "UCMY"  uICMYK
                         phEnumUIDuotone -> 1430549614 -> "UDtn"  uIDuotone
                     phKeyUseGlobalAngle -> 1969712231 -> "uglg"  useGlobalAngle
                       phEnumUIGrayscale -> 1430745721 -> "UGry"  uIGrayscale
                         phEnumUIIndexed -> 1430875748 -> "UInd"  uIIndexed
                             phEnumUILab -> 1431069026 -> "ULab"  uILab
                    phEnumUIMultichannel -> 1431137396 -> "UMlt"  uIMultichannel
                              phEnumUndo -> 1433297952 -> "Und "  undoEnum
                      phKeyUndefinedArea -> 1433297985 -> "UndA"  undefinedArea
                     phTypeUndefinedArea
                          phKeyUnderline -> 1433298028 -> "Undl"  underline
                             phEventUndo -> 1970168943 -> "undo"  undoEvent
                    phEventUnderpainting -> 1433298034 -> "Undr"  underpainting
                           phEnumUniform -> 1433298541 -> "Unfm"  uniform
               phEnumUniformDistribution -> 1433298546 -> "Unfr"  uniformDistribution
                          phEventUngroup -> 1433298802 -> "Ungr"  ungroup
                           phEventUnlink -> 1433300075 -> "Unlk"  unlink
                 phClassUnspecifiedColor -> 1433301827 -> "UnsC"  unspecifiedColor
                      phEventUnsharpMask -> 1433301837 -> "UnsM"  unsharpMask
                        phTypeUnitDouble -> 1433302086 -> "UntF"  floatUnit
                         phTypeUnitFloat
                           phKeyUntitled -> 1433302124 -> "Untl"  untitled
                       phClassUnitsPrefs -> 1433302096 -> "UntP"  unitsPrefs
                         phKeyUnitsPrefs
            phEnumUnitsRulersPreferences -> 1433302098 -> "UntR"  unitsRulersPreferences
                             phKeyUpperY -> 1433432153 -> "UppY"  upperY
                             phEnumUpper -> 1433432608 -> "Upr "  upper
                             phEnumUIRGB -> 1431455554 -> "URGB"  uIRGB
                            phKeyUrgency -> 1433560942 -> "Urgn"  urgency
                           phTypeUrgency
                                phKeyURL -> 1431456800 -> "URL "  URL
              phKeyUseCacheForHistograms -> 1433617251 -> "UsCc"  useCacheForHistograms
                          phKeyUseCurves -> 1433617266 -> "UsCr"  useCurves
                         phKeyUseDefault -> 1433617510 -> "UsDf"  useDefault
                      phKeyUseICCProfile -> 1433618755 -> "UsIC"  useICCProfile
                            phKeyUseMask -> 1433619827 -> "UsMs"  useMask
                              phKeyUsing -> 1433628263 -> "Usng"  using
                    phKeyUserMaskEnabled -> 1433629261 -> "UsrM"  userMaskEnabled
                   phTypeUserMaskOptions
                     phKeyUserMaskLinked -> 1433629299 -> "Usrs"  userMaskLinked
                          phEnumUserStop -> 1433629267 -> "UsrS"  userStop
                            phKeyVector0 -> 1449358384 -> "Vct0"  vector0
                            phKeyVector1 -> 1449358385 -> "Vct1"  vector1
                        phKeyVectorColor -> 1449358403 -> "VctC"  vectorColor
                         phKeyVideoAlpha -> 1449421936 -> "Vdlp"  videoAlpha
                              phKeyValue -> 1449926688 -> "Vl  "  value
                         phTypeValueList -> 1449938035 -> "VlLs"  valueList
                            phEnumViolet -> 1449948192 -> "Vlt "  violet
                     phEnumVMPreferences -> 1447907442 -> "VMPr"  vMPreferences
                         phKeyVersionFix -> 1450341190 -> "VrsF"  versionFix
                       phKeyVersionMajor -> 1450341197 -> "VrsM"  versionMajor
                          phClassVersion -> 1450341230 -> "Vrsn"  version
                       phKeyVersionMinor -> 1450341198 -> "VrsN"  versionMinor
                          phEnumVertical -> 1450341475 -> "Vrtc"  vertical
                           phKeyVertical
                  phTypeVerticalLocation -> 1450341452 -> "VrtL"  verticalLocation
                       phEventVariations -> 1450341486 -> "Vrtn"  variations
                      phEnumVerticalOnly -> 1450341455 -> "VrtO"  verticalOnly
                      phKeyVerticalScale -> 1450341459 -> "VrtS"  verticalScale
                            phKeyVisible -> 1450402412 -> "Vsbl"  visible
                             phEventWait -> 1466001780 -> "Wait"  wait
                          phKeyWatermark -> 2002875506 -> "watr"  watermark
                             phEventWave -> 1466005093 -> "Wave"  wave
                        phKeyWebdavPrefs -> 1466066000 -> "WbdP"  
                      phClassWebdavPrefs -> 1466196598 -> "Wdbv"  
                              phKeyWidth -> 1466201192 -> "Wdth"  width
                               phEnumWeb -> 1466262048 -> "Web "  web
                               phKeyWhat -> 1466458484 -> "What"  what
                        phKeyWhiteIsHigh -> 1466452073 -> "WhHi"  whiteIsHigh
                          phKeyWholePath -> 1466454132 -> "WhPt"  wholePath
                             phEnumWhite -> 1466463264 -> "Wht "  white
                          phKeyWhiteClip -> 1466463299 -> "WhtC"  whiteClip
                     phKeyWhiteIntensity -> 1466463305 -> "WhtI"  whiteIntensity
                         phKeyWhiteLevel -> 1466463308 -> "WhtL"  whiteLevel
                         phKeyWhitePoint -> 1466463312 -> "WhtP"  whitePoint
                            phEnumWhites -> 1466463347 -> "Whts"  whites
                     phEnumWidePhosphors -> 1466524773 -> "Wide"  widePhosphors
                           phEnumWindows -> 1466527264 -> "Win "  windows
                               phKeyWith -> 1466528872 -> "With"  with
                      phKeyWavelengthMin -> 1464618350 -> "WLMn"  wavelengthMin
                      phKeyWavelengthMax -> 1464618360 -> "WLMx"  wavelengthMax
                              phEnumWind -> 1466852384 -> "Wnd "  wind
                             phEventWind
                         phKeyWindMethod -> 1466852429 -> "WndM"  windMethod
                        phTypeWindMethod
                     phEnumWindowsSystem -> 1466852435 -> "WndS"  windowsSystem
                      phEnumWinThumbnail -> 1466848360 -> "WnTh"  winThumbnail
                      phEnumWideGamutRGB -> 1465009986 -> "WRGB"  wideGamutRGB
                          phEnumWorkPath -> 1467116368 -> "WrkP"  workPathIndex
                      phKeyWorkPathIndex
                              phEnumWrap -> 1467117600 -> "Wrp "  wrap
                        phEnumWrapAround -> 1467117633 -> "WrpA"  wrapAround
                           phKeyWorkPath -> 1467109492 -> "WrPt"  workPath
                    phKeyWatchSuspension -> 1467245395 -> "WtcS"  watchSuspension
                           phKeyWetEdges -> 1467245671 -> "Wtdg"  wetEdges
                       phEventWatercolor -> 1467249251 -> "Wtrc"  watercolor
                       phEventWaterPaper -> 1467249232 -> "WtrP"  waterPaper
                          phEnumWaveSine -> 1467372398 -> "WvSn"  waveSine
                        phEnumWaveSquare -> 1467372401 -> "WvSq"  waveSquare
                           phKeyWaveType -> 1467380848 -> "Wvtp"  waveType
                          phTypeWaveType
                      phEnumWaveTriangle -> 1467372658 -> "WvTr"  waveTriangle
                                  phKeyX -> 1478500384 -> "X   "  x
                  phEnumBitDepthX4R4G4B4 -> 2016687156 -> "x444"  
                    phEnumBitDepthR5G6B5 -> 2016753205 -> "x565"  
                  phEnumBitDepthX8R8G8B8 -> 2016950328 -> "x888"  
                         phEnumExclusion -> 1482910837 -> "Xclu"  exclusion
                         phClassXYYColor -> 1482250563 -> "XYYC"  xYYColor
                                  phKeyY -> 1495277600 -> "Y   "  y
                            phEnumYellow -> 1500277879 -> "Yllw"  yellow
                       phEnumYellowColor -> 1500280608 -> "Ylw "  yellowColor
                             phKeyYellow
                           phEnumYellows -> 1500280691 -> "Ylws"  yellows
                               phEnumYes -> 1500717088 -> "Ys  "  yes
                             phTypeYesNo -> 1500728864 -> "YsN "  yesNo
                           phEventZigZag -> 1516722791 -> "ZgZg"  zigZag
                              phEnumZoom -> 1517101088 -> "Zm  "  zoom
                            phEnumZoomIn -> 1517111662 -> "ZmIn"  zoomIn
                           phEnumZoomOut -> 1517113204 -> "ZmOt"  zoomOut
                               phEnumZip -> 1517307246 -> "ZpEn"  zip
                         phKeyZigZagType -> 1515869305 -> "ZZTy"  zigZagType
                        phTypeZigZagType
```
