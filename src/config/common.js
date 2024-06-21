
export default {
    newScan: function (scans) {
        let num = 0;
        for (let i = 0; i < scans.length - 1; i++) {
            if (scans[i].scans !== scans[i + 1].scans) {
                num = i
            }
        }
        if (num != 0) { num = scans.length - num + 1 }
        return num
    },

    asnExtractValues: function (arr) {
        var result = arr.map(item => {
            var confidence = item.confidence;
            var id = item.id;
            var Module = item.module;
            var scan = item.scan;
            var scan_id = item.scan_id;
            var scans = item.scans;
            var timestamp = item.timestamp;
            var _BaseEvent__host = item._BaseEvent__host;
            var _BaseEvent__words = item._BaseEvent__words;
            var _data = item._data;
            var _dummy = item._dummy;
            var _hash = item._hash;
            var _id = item._id;
            var _internal = item._internal;
            var _module_priority = item._module_priority;
            var _port = item._port;
            var _priority = item._priority;
            var _resolved_hosts = item._resolved_hosts;
            var _po_scope_distancert = item._scope_distance;
            var _scope_distance = item._scope_distance;
            var _source_id = item._source_id;
            var _tags = item._tags;
            var _type = item._type;
            var ip_address = item._source.match(/\(\"(.*?)\",/)[1];
            var module = item._source.match(/module=(.*?),/)[1];
            var tags = item._source.match(/tags=\{(.*?)\}/)[1];

            return {
                confidence,
                id,
                Module,
                scan,
                scan_id,
                scans,
                timestamp,
                _BaseEvent__host,
                _BaseEvent__words,
                _data,
                _dummy,
                _hash,
                _id,
                _internal,
                _module_priority,
                _port,
                _priority,
                _resolved_hosts,
                _po_scope_distancert,
                _scope_distance,
                _source_id,
                _tags,
                _type,
                _source: {
                    ip_address, module, tags,
                }
            };
        });
        return result;
    },

    TcpPortExtractValues: function (arr) {
        var result = arr.map(item => {
            var confidence = item.confidence;
            var id = item.id;
            var Module = item.module;
            var parsed = item.parsed;
            var scan = item.scan;
            var scan_id = item.scan_id;
            var scans = item.scans;
            var timestamp = item.timestamp;
            var _BaseEvent__host = item._BaseEvent__host;
            var _BaseEvent__words = item._BaseEvent__words;
            var _data = item._data;
            var _dummy = item._dummy;
            var _hash = item._hash;
            var _id = item._id;
            var _internal = item._internal;
            var _module_priority = item._module_priority;
            var _port = item._port;
            var _priority = item._priority;
            var _source_id = item._source_id;
            var _stats_recorded = item._stats_recorded;
            var _source = item._source;
            var _tags = item._tags;
            var _type = item._type;

            var resolvedHostsPairs = "";
            let resolvedHosts = item["_resolved_hosts"];
            if (resolvedHosts && typeof resolvedHosts === 'string') {
                let matches = resolvedHosts.match(/(?:\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b|\b[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b)/g);
                if (matches && matches.length >= 2) {
                    resolvedHostsPairs = (matches.slice(0, 2));
                }
            } else if (resolvedHosts && typeof resolvedHosts === 'object') {
                let values = Object.values(resolvedHosts);
                if (values.length >= 2) {
                    let pair = values.slice(0, 2).map(value => {
                        if (typeof value === 'string') {
                            let matches = value.match(/(?:\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b|\b[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b)/g);
                            return matches ? matches[0] : null;
                        }
                    });
                    resolvedHostsPairs = (pair);
                }
            }

            return {
                confidence,
                id,
                Module,
                parsed,
                scan,
                scan_id,
                scans,
                timestamp,
                _BaseEvent__host,
                _BaseEvent__words,
                _data,
                _dummy,
                _hash,
                _id,
                _internal,
                _module_priority,
                _port,
                _priority,
                _source_id,
                _stats_recorded,
                _source,
                _tags,
                _type,
                _resolved_hosts: resolvedHostsPairs,
            };
        });
        return result;
    }
}
