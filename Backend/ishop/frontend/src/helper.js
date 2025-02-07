function formatPriceINR(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(amount).replace(/\.00$/, '');
}

export { formatPriceINR }
