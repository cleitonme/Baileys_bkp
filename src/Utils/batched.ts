export function batched(fn: any, size: number, post: any) {
	return async(...args: any[]) => {
		const [jids, ...rest] = args
		const results: any = []

		for(let i = 0; i < jids.length; i += size) {
			const batch = jids.slice(i, i + size)
			const result = await fn(batch, ...rest)
			results.push(result)
		}

		if(post) {
			return post(results)
		}

        console.log("to aqui");

		return results
	}
}
