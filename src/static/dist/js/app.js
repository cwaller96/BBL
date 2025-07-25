let LabelModel = function (data) {
    // Create a reference to this for use within callbacks
    let self = this;

    // Define defaults
    let defaults = {
        technologies: ['Fixed', 'Mobile'],
        data_units: ['TB', 'GB', 'MB', 'KB'],
        latency_units: ['ns', 'ms', 's'],
        period_units: ['day(s)', 'month(s)', 'year(s)'],
        speed_units: ['Gbps', 'Mbps', 'Kbps'],
        binary_options: ['No', 'Yes'],
        id: 'BRNZ-1234567890',
        provider_name: 'Your ISP Name',
        service_plan_name: 'Basic Internet Plan',
        technology: 'Fixed',
        intro_price: '49.99',
        intro_period: '12',
        intro_period_unit: 'month(s)',
        monthly_price: '59.99',
        contract_length: '12',
        contract_length_unit: 'month(s)',
        contract_terms_url: 'https://example.com/terms',
        monthly_fees: [
            {
                label: 'Equipment Rental',
                fee: '10.00',
            }
        ],
        one_time_fees: [
            {
                label: 'Installation',
                fee: '99.99',
            }
        ],
        early_termination_fee: '150.00',
        discounts_url: 'https://example.com/discounts',
        discounts: [
            {
                label: 'Bundle Discount',
                amount: '$10.00',
                url: 'https://example.com/bundle-discount',
            }
        ],
        download_speed: '100',
        download_speed_unit: 'Mbps',
        upload_speed: '10',
        upload_speed_unit: 'Mbps',
        latency: '20',
        latency_unit: 'ms',
        data_included: '1000',
        data_included_unit: 'GB',
        additional_data_charge: '10',
        additional_data_amount: '100',
        additional_data_unit: 'GB',
        network_management_policy_url: 'https://example.com/network-policy',
        privacy_policy_url: 'https://example.com/privacy-policy',
        support_url: 'https://example.com/support',
        support_phone: '8005551234',
        support_email: 'support@example.com'
    };

    // Merge defaults with runtime data
    data = $.extend({}, defaults, data);

    // Initialize model properties
    self.technologies = ko.observableArray(data.technologies);
    self.data_units = ko.observableArray(data.data_units);
    self.latency_units = ko.observableArray(data.latency_units);
    self.period_units = ko.observableArray(data.period_units);
    self.speed_units = ko.observableArray(data.speed_units);
    self.binary_options = ko.observableArray(data.binary_options);
    self.id = ko.observable(data.id);
    self.provider_name = ko.observable(data.provider_name);
    self.service_plan_name = ko.observable(data.service_plan_name);
    self.technology = ko.observable(data.technology);
    self.intro_price = ko.observable(data.intro_price);
    self.intro_period = ko.observable(data.intro_period);
    self.intro_period_unit = ko.observable(data.intro_period_unit);
    self.monthly_price = ko.observable(data.monthly_price);
    self.contract_length = ko.observable(data.contract_length);
    self.contract_length_unit = ko.observable(data.contract_length_unit);
    self.contract_terms_url = ko.observable(data.contract_terms_url);
    self.monthly_fees = ko.observableArray(data.monthly_fees.map(fee => ({
        label: ko.observable(fee.label),
        fee: ko.observable(fee.fee)
    })));
    self.one_time_fees = ko.observableArray(data.one_time_fees.map(fee => ({
        label: ko.observable(fee.label),
        fee: ko.observable(fee.fee)
    })));
    self.early_termination_fee = ko.observable(data.early_termination_fee);
    self.discounts_url = ko.observable(data.discounts_url);
    self.discounts = ko.observableArray(data.discounts.map(discount => ({
        label: ko.observable(discount.label),
        amount: ko.observable(discount.amount),
        url: ko.observable(discount.url)
    })));
    self.download_speed = ko.observable(data.download_speed);
    self.download_speed_unit = ko.observable(data.download_speed_unit);
    self.upload_speed = ko.observable(data.upload_speed);
    self.upload_speed_unit = ko.observable(data.upload_speed_unit);
    self.latency = ko.observable(data.latency);
    self.latency_unit = ko.observable(data.latency_unit);
    self.data_included = ko.observable(data.data_included);
    self.data_included_unit = ko.observable(data.data_included_unit);
    self.additional_data_charge = ko.observable(data.additional_data_charge);
    self.additional_data_amount = ko.observable(data.additional_data_amount);
    self.additional_data_unit = ko.observable(data.additional_data_unit);
    self.network_management_policy_url = ko.observable(data.network_management_policy_url);
    self.privacy_policy_url = ko.observable(data.privacy_policy_url);
    self.support_url = ko.observable(data.support_url);
    self.support_phone = ko.observable(data.support_phone);
    self.support_email = ko.observable(data.support_email);

    self.data_included_formatted = ko.computed(function () {
        if (!self.data_included() && self.data_included() !== 0) {
            return 'Unlimited';
        }
        return self.data_included() + ' ' + self.data_included_unit();
    }, self);

    self.additional_data_formatted = ko.computed(function () {
        if (!self.additional_data_charge()) {
            return 'None';
        }
        return '$' + self.additional_data_charge() + ' / ' + self.additional_data_amount()
            + ' ' + self.additional_data_unit();
    }, self);

    self.support_phone_formatted = ko.computed(function () {
        if (!self.support_phone()) return '';
        let phone = self.support_phone().replace(/\D/g, '');
        let area = phone.substr(0, 3);
        let prefix = phone.substr(3, 3);
        let suffix = phone.substr(6, 4);
        return '(' + area + ') ' + prefix + '-' + suffix;
    }, self);

    self.support_phone_url = ko.computed(function () {
        return 'tel:' + self.support_phone();
    }, self);

    self.addMonthlyFee = function () {
        self.monthly_fees.push({
            label: ko.observable('Fee Label'),
            fee: ko.observable('0'),
        });
    };

    self.addOneTimeFee = function () {
        self.one_time_fees.push({
            label: ko.observable('Fee Label'),
            fee: ko.observable('0'),
        });
    };

    self.addDiscount = function () {
        self.discounts.push({
            label: ko.observable('Discount Label'),
            amount: ko.observable(''),
            url: ko.observable(''),
        });
    };

    self.removeMonthlyFee = function (fee) {
        self.monthly_fees.remove(fee);
    };

    self.removeOneTimeFee = function (fee) {
        self.one_time_fees.remove(fee);
    };

    self.removeDiscount = function (discount) {
        self.discounts.remove(discount);
    };
};
