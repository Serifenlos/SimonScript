// --- Import lib (https://www.npmjs.com/package/xmldom)
import xmldom from "xmldom"
// --- In constructor...
this.dom = new xmldom.DOMImplementation()
this.xmlSerializer = new xmldom.XMLSerializer()
this.domParser = new xmldom.DOMParser()

// --- BatchPlay Getter/Setter
private setLayerXMPMetaData(xmp: string) {
    const desc = {
        _obj: "set",
        _target: [{
            _ref: "property",
            _property: "XMPMetadataAsUTF8"
        }, {
            _ref: "layer",
            _enum: "ordinal",
            _value: "targetEnum"
        }],
        to: {
            _obj: "layer",
            XMPMetadataAsUTF8: xmp
        }
    };
    photoshop.action.batchPlay([desc], {});
}

private getLayerXMPMetaData(): string {
    return photoshop.action.batchPlay([{
        _obj: 'get',
        _target: {
            _ref: [{
                    _property: 'XMPMetadataAsUTF8'
                },
                {
                    _ref: 'layer',
                    _enum: 'ordinal',
                    _value: 'targetEnum'
                },
            ],
        },
    }, ], {
        synchronousExecution: true
    })[0].XMPMetadataAsUTF8
}

// --- Access Functions
private setLayerMetadata(key: string, value: string, namespace ? : string) {
    const xmpString = this.getLayerXMPMetaData()
    const xmlDoc: XMLDocument = xmpString ? this.domParser.parseFromString(xmpString, 'text/xml') : this.dom.createDocument(namespace, key, null)
    const node = namespace ? xmlDoc.getElementsByTagNameNS(namespace, key)[0] || xmlDoc.createElementNS(namespace, key) : xmlDoc.getElementsByTagName(key)[0] || xmlDoc.createElement(key)
    node.textContent = value
    xmlDoc.appendChild(node)
    this.setLayerXMPMetaData(this.xmlSerializer.serializeToString(xmlDoc))
}



private getLayerMetadata(key: string, namespace ? : string) {
    const xmpString = this.getLayerXMPMetaData()
    if (xmpString) {
        const xmlDoc: XMLDocument = this.domParser.parseFromString(xmpString, 'text/xml');
        const node = namespace ? xmlDoc.getElementsByTagNameNS(namespace, key)[0] : xmlDoc.getElementsByTagName(key)[0]
        if (node) {
            return node.textContent
        }
    }
}

private deleteLayerMetadata(key: string, namespace ? : string) {
    const xmpString = this.getLayerXMPMetaData()
    if (xmpString) {
        const xmlDoc: XMLDocument = this.domParser.parseFromString(xmpString, 'text/xml');
        const node = namespace ? xmlDoc.getElementsByTagNameNS(namespace, key)[0] : xmlDoc.getElementsByTagName(key)[0]
        if (node) {
            xmlDoc.removeChild(node)
            this.setLayerXMPMetaData(this.xmlSerializer.serializeToString(xmlDoc))
        }
    }
}

private resetLayerMetadata() {
    const xmlDoc = this.dom.createDocument("", "", null);
    this.setLayerXMPMetaData(this.xmlSerializer.serializeToString(xmlDoc))
}

// --- Usage Example
const someKey = 'layer-settings'

this.setLayerMetadata(someKey, 'some value or json-string')
this.getLayerMetadata(someKey) // -> some value or json-string
this.deleteLayerMetadata(someKey)
this.getLayerMetadata(someKey) // -> undefined